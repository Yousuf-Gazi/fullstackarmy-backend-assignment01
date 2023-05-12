const generatePerson = (req, res) => {
    let { properties } = req.query;

    // Perform any necessary validation or error handling
    if (!properties || typeof properties !== 'string') {
        return res.status(400).json({ 
            error: 'Invalid properties parameter' 
        });
    }

    // Parse the properties parameter into an array
    properties = properties.split(',');

    // Define the possible values for each property
    const possibleValues = {
        firstName: ['John', 'Jane', 'Michael', 'Emily', 'David'],
        lastName: ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'],
        email: ['john@example.com', 'jane@example.com', 'michael@example.com'],
        avatar: ['avatar1.jpg', 'avatar2.jpg', 'avatar3.jpg'],
        age: [25, 32, 41, 29, 36],
        address: ['123 Main St', '456 Elm St', '789 Oak St'],
    };

    // Generate a random person profile
    const person = {};
    properties.forEach((property) => {
        if (possibleValues[property]) {
            const propertyValues = possibleValues[property];
            const randomIndex = Math.floor(Math.random() * propertyValues.length);
            person[property] = propertyValues[randomIndex];
        }
    });

    res.json(person);
};

module.exports = { generatePerson };