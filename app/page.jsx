export default function Home() {
  const longText = `[Long sample text...]`.repeat(10);
  const shortText = `This is the short sample text for Box 5 that will be fully visible without scrolling. It demonstrates the non-scrolling box functionality.`;

  return (
    <div className="container">
      {/* Box 1 (Top) */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* Boxes 2 & 3 (Middle) */}
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
      
      {/* Box 4 (Bottom) */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">
          <p>{longText}</p>
        </div>
      </div>
      
      {/* New Box 5 (Non-scrolling) */}
      <div className="square box-five">
        <div className="content-title">Sample 5</div>
        <div className="content-body">
          <p>{shortText}</p>
        </div>
      </div>
    </div>
  );
}
