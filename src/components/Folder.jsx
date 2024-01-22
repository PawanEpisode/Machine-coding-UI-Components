import React, { useState } from "react";

const Folder = ({ folderData }) => {
  const [expand, setExpand] = useState(false);
  const { name, type, children } = folderData;

  if (type === "folder") {
    return (
      <div style={{ backgroundColor: "green", padding: "16px" }}>
        <span
          style={{
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => setExpand(!expand)}
        >
          {name}
        </span>

        <div
          style={
            expand
              ? {
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  flexDirection: "column",
                  marginTop: '16px',
                  marginLeft: "10px",
                  padding: "10px",
                  backgroundColor: "orange",
                }
              : { display: "none" }
          }
        >
          {children?.map((item) => (
            <Folder key={item.name} folderData={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <span style={{
            backgroundColor: "brown",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
          }}>{name} ({folderData?.size})</span>
      </>
    );
  }
};

export default Folder;
