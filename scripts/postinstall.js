const fs = require('fs');
const glob = require('glob');

glob("node_modules/react-native-reanimated-skeleton/**/*.js", (err, files) => {
    if (err) {
        console.error("Error0:", err);
        return;
    }
    files.forEach((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error("Error1:", file, err);
                return;
            }

            const updatedData = data.replace(/import LinearGradient/g, 'import { LinearGradient }')
                .replace(/react-native-linear-gradient/g, 'expo-linear-gradient');

            fs.writeFile(file, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error("Error2:", file, err);
                }
            });
        });
    });
});
