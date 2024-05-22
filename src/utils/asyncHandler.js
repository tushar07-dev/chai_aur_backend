
// Higher ORder function - promises

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => {next(err);});
    }
};

export {asyncHandler};

// Higher ORder function
// const asyncHandler = () => {};
// const asyncHandler = (func) => () =>{};
// const asyncHandler = (func) => async() =>{};


// Higher ORder function - using try catch


// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.code || 500).json({success: false, message: err.message});
//     }
// }