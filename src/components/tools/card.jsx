import { Link } from 'react-router-dom';

export default function ToolsList({ data }) {
  return (
    <div className="tool-container">
      <h1 className="tool-header">ארגז הכלים של שרגא:</h1>
      <div className="tool-grid">
        {data?.documents.map((tool) => (
          <ToolCard key={tool.$id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
function ToolCard({ tool }) {
    // Calculate average stars
    const averageStars = tool.stars.reduce((acc, curr) => acc + curr, 0) / tool.stars.length;
    const roundedStars = Math.round(averageStars);

    return (
        <div className="tool-card">
            <img src={tool['img-url']} alt={tool.name} className="tool-card-image" />
            <div className="tool-card-content">
                <h2 className="tool-card-title">{tool.name}</h2>
                <div className="tool-card-detail">
                    <strong>דירוג ממוצע:</strong> 
                    {'★'.repeat(roundedStars)}
                    {'☆'.repeat(5 - roundedStars)}
                </div>
                <p className="tool-card-description">{tool.description}</p>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-card-link">גישה לכלי </a>
                <p className="tool-card-detail"><strong>קטגוריה:</strong> {tool.Category.join(', ')}</p>
                <p className="tool-card-date"><strong>הועלה:</strong> {new Date(tool['date-uploaded']).toLocaleDateString()}</p>
                <p className="tool-card-uploader"><strong>על ידי:</strong> {tool.username}</p>
            </div>
        </div>
    );
}