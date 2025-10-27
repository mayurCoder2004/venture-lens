import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IdeaResult = ({ result }) => {
  if (!result) return null;

  // If backend wraps the response in an object, get the text part
  const output =
    typeof result === "string" ? result : result?.analysis || JSON.stringify(result, null, 2);

  return (
    <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">
        🧠 Analysis Result
      </h2>

      <div className="prose max-w-none prose-headings:text-purple-700 prose-p:text-gray-800 prose-li:text-gray-700">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {output}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default IdeaResult;
