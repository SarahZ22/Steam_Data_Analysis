# import libraries
from flask import Flask, render_template, redirect
from flask import jsonify
import pickle
import pandas as pd

# Flask Setup 
# load the model
app = Flask(__name__)
loaded_model = pickle.load(open("lr_model.pickle", 'rb'))


def predict_hit(real_price, metascore):
    """
        metascore does not need to be scaled
        price needs to be scaled using 69.03, which was the max in the training set
    """
    scaled_price = real_price / 69.03
    
    # convert data to dataframe
    input_df =  pd.DataFrame(data = [[scaled_price, metascore]] , columns=['Price', 'Metascores'])

    # predict the value
    predictions = loaded_model.predict(input_df)

    # just keep the first item because out df had one row
    predicted_value = predictions[0]
    
    return predicted_value

# create route 
@app.route('/')
def index():
    """
       Create route that renders machine_learning.html 
    """
    return render_template("machine_learning.html")


# Route that trigger display function.
@app.route('/predict/<price>/<metascore>')
def display(price, metascore):
    """
        
    """
    price = float(price)
    metascore = float(metascore)
    # user sends metascore from 1-100
    # but we need 0.0 - 1.0, so divide by 100
    metascore = metascore / 100.0

    is_hit = predict_hit(real_price=price, metascore=metascore)
    return jsonify({"is_hit": is_hit,
            "price": price,
            "metascore": metascore})

if __name__=='__main__':
    app.run(debug=True)
