export default function Home() {
  const sampleText = `Lorem ipsum dolor sit amet...`.repeat(3); 
  // Reduced text since we're not scrolling

  return (
    <div className="container">
      {/* Top Box (pink) */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">{sampleText}</div>
      </div>
      
      {/* Middle Boxes (medium-dark grey) */}
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="content-title">Sample 2</div>
          <div className="content-body">{sampleText}</div>
        </div>
        <div className="square middle-square">
          <div className="content-title">Sample 3</div>
          <div className="content-body">{sampleText}</div>
        </div>
      </div>
      
      {/* Bottom Box (pink) */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">{sampleText}</div>
      </div>
    </div>
  )
}
