### Redux

Redux posed a challenge this time around, but once it was set up properly, it was easy to access our information across components. We can also show updates in real time by using the useDispatch React Hook.

```js
// Here is a snippet that showcases the functions that allow us to edit our decks in real time

export const addCard = (cardId, deckId) => async (dispatch) => {
	const response = await fetch(`/api/cards/${cardId}/add_to_deck/${deckId}`, {method: 'POST'})
	const resJSON = await response.json();
	dispatch(setDeck(resJSON));
	return response;
};

export const removeCard = (cardId, deckId) => async (dispatch) => {
	const response = await fetch(`/api/cards/${cardId}/remove_from_deck/${deckId}`, {method: 'POST'})
	const resJSON = await response.json();
	dispatch(setDeck(resJSON));
	return response;
};
```


### Python

Python has been a challenge to learn, as our second language. We also had to learn an entire new package to write our server, Flask. We utilized SQLAlchemy as our ORM. It was a pain to get our database defined, but once we did, querying became a breeze.

```py
# We accomplished a search and filter route, in just 4 lines of code. List comprehensions played a big role in our back end.

@deck_routes.route('/search/<term>', methods=['GET'])
def deck_search(term):
    decks = db.session.query(Deck).all()

    return {"decks": [deck.to_dict() for deck in decks if term in deck.tags]}

```
