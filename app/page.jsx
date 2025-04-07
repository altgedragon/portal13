export default function Home() {
  // Text long enough to force scrolling in all boxes
  const longText = `
    [Your long content here...]
    `.repeat(10); 

  return (
    <div className="container">
      {/* Top Box (pink) */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Middle Boxes (gray) */}
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="content-title">Sample 2</div>
          <div className="content-body">
            <p>{longText}</p>
          </div>
        </div>
        <div className="square middle-square">
          <div className="content-title">Sample 3</div>
          <div className="content-body">
            <p>{longText}</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Box (pink) */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
    </div>
  );
}
