import ReactMarkdown from "react-markdown";

export default function Note({ md }: { md: string }) {
    return (
        <div className="">
            <ReactMarkdown>{md}</ReactMarkdown>
        </div>
    );
}
