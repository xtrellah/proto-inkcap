import Note from "./components/Note";

const testMd = `
# Hello World
Test MD
- list item
- list item
> this thing
### h3
`;

function App() {
    return (
        <>
            <Note md={testMd}></Note>
            <Note md={testMd}></Note>
            <Note md={testMd}></Note>
        </>
    );
}

export default App;
