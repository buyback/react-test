const forbidenWords = ["spam", "money"];

/*
Here’s what the middleware does: 
when action type is ADD_ARTICLE check if action.payload.title contains a bad word.
If it does then dispatch an action of type “FOUND_BAD_WORD”,
otherwise let the next action pass.
*/

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
      return function(action){
          // do your stuff
          if(action.type === 'ADD_POSTING') {
              const foundWord = forbidenWords.filter(word => action.payload.title.includes(word));

            if(foundWord.length) {
                return dispatch({type: "FOUND_BAD_WORD"});
              }
        };
        
        return next(action);
      }
    }
  }