const generateRandomValue = (req, res) => {
    const { start, end } = req.query;
    const randomValue = Math.floor(Math.random() * (end - start + 1) + start);
    res.json({ randomValue });
};

module.exports = { generateRandomValue };