import uuid from 'uuid'; 
export const ADD_QUOTE = "ADD_QUOTE"
export const REMOVE_QUOTE = "REMOVE_QUOTE"
export const UPVOTE_QUOTE = "UPVOTE_QUOTE" 
export const DOWNVOTE_QUOTE = "DOWNVOTE_QUOTE"

export const addQuote = (quote) => {
    let id = uuid();
    return {
        type: "ADD_QUOTE",
        quote: {
            id,
            ...quote
        }
    }
}

export const removeQuote = (quoteId) => {
    return {
        type: "REMOVE_QUOTE",
        quoteId
    }
}

export const upvoteQuote = (quoteId) => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId
    }
}

export const downvoteQuote = (quoteId) => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}

const mapStateToProps = (quotes) => {
    return {
        quotes
    }
}