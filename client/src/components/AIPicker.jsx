import React from "react";
import CustomButton from "./CustomButton";

function AIPicker({ prompt, setPrompt, generatingImage, handleSubmit }) {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs "
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              customStyles="text-xs"
              handleClick={() => handleSubmit("logo")}
            />
            <CustomButton
              type="filled"
              title="AI Full"
              customStyles="text-xs"
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
