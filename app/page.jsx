export default function Home() {
  const longText = `[Long sample text...]`.repeat(10);
  const shortText = `This is the short sample text for Box 5 that will be fully visible without scrolling. 
                    It demonstrates content that fits within the box boundaries.`;

  return (
    <div className="container">
      {/* Top Box */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="scroll-content">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Middle Boxes */}
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="content-title">Sample 2</div>
          <div className="scroll-content">
            <p>{longText}</p>
          </div>
        </div>
        <div className="square middle-square">
          <div className="content-title">Sample 3</div>
          <div className="scroll-content">
            <p>{longText}</p>
          </div>
        </div>
      </div>
      
      {/* New Box 5 */}
      <div className="square box-five">
        <div className="content-title">Sample 5</div>
        <div className="full-content">
          <p>{shortText}</p>
        </div>
      </div>
      
      {/* Bottom Box */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="scroll-content">
          <p>{longText}</p>
        </div>
      </div>
    </div>
  );
}
