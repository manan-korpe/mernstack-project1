const asyncHandler = (fc) => (req,res,next) => {
    Promise.resolve(fc(req,res,next)).catch(next);
}

export default asyncHandler