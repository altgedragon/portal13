export default function Home() {
  const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse. 
  Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. 
  Cupidatat non proident, sunt in culpa qui officia deserunt mollit. 
  Anim id est laborum. `.repeat(10); // Repeated to ensure scrollable content

  return (
    <div className="container">
      {/* Top Box */}
      <div className="square top-square">
        <div className="content-title">Sample Title 1</div>
        <div className="content-body">{sampleText}</div>
      </div>
      
      {/* Middle Boxes */}
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
      
      {/* Bottom Box */}
      <div className="square bottom-square">
        <div className="content-title">Sample 4</div>
        <div className="content-body">{sampleText}</div>
      </div>
    </div>
  )
}
