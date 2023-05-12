const analyzeString = (req, res) => {
    const { input } = req.query;

    // Perform any necessary validation or error handling
    if (!input || typeof input !== 'string') {
        return res.status(400).json({ 
            error: 'Invalid input parameter' 
        });
    }

    // Analyze the input string
    const letters = input.match(/[a-zA-Z]/g) || [];
    const symbols = input.match(/[^a-zA-Z0-9\s]/g) || [];
    const numbers = input.match(/[0-9]/g) || [];

    const result = {
        letters: letters.length,
        symbols: symbols.length,
        numbers: numbers.length,
    };

    res.json(result);
};

module.exports = { analyzeString };
