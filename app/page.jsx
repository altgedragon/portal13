export default function Home() {
  const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. `.repeat(20);

  return (
    <div className="container">
      <div className="square top-square">
        <div className="square-header">Sample Title 1</div>
        <div className="scroll-content">
          <p>{sampleText}</p>
        </div>
      </div>
      
      <div className="middle-squares">
        <div className="square middle-square">
          <div className="square-header">Sample 2</div>
          <div className="scroll-content">
            <p>{sampleText}</p>
          </div>
        </div>
        <div className="square middle-square">
          <div className="square-header">Sample 3</div>
          <div className="scroll-content">
            <p>{sampleText}</p>
          </div>
        </div>
      </div>
      
      <div className="square bottom-square">
        <div className="square-header">Sample 4</div>
        <div className="scroll-content">
          <p>{sampleText}</p>
        </div>
      </div>
    </div>
  )
}
