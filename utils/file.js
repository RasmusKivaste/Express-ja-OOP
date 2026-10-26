import fs from 'node:fs/promises';

class File {
    async writeFile(data) {
        try {
            await fs.writeFile('./data/todos.json', JSON.stringify(data));
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }

    async readFile() {
        try {
            const data = await fs.readFile('./data/todos.json', 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading file:', err);
            return [];
        }
    }
}

export const fileManager = new File();