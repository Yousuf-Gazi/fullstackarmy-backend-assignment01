const generateRandomValue = (req, res) => {
    const { start, end } = req.query;
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    if (isNaN(startNum) || isNaN(endNum)) {
        return res.status(400).json({ error: 'Invalid start or end value' });
    }

    const randomValue = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
    res.json({ randomValue });
};

module.exports = { generateRandomValue };