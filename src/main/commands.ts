export const commands = [
    {
        name: "ping",
        description: "initial command",
        "options": [
            {
                "name": "arg",
                "description": "test",
                "type": 3,
                "required": true,
                "choices": [
                    {
                        "name": "4S",
                        "value": "4Sno"
                    }
                ]
            }
        ]
    },
    {
        name: "emergency",
        description: "see nitkc's emergency contact",
    }
];