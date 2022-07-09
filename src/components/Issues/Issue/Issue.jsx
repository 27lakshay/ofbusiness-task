import "./issue.css";
{
    /* <i class="fa-solid fa-message"></i> */
}
const Issue = ({ data }) => {
    return (
        <div className="issue">
            <div className="issue-left">
                <i class="fa-solid fa-exclamation"></i>
            </div>
            <div className="issue-middle">
                <a className="issue-title">{data.title}</a>
                <span className="issue-tags">
                    {data?.labels.map((label) => (
                        <span
                            style={{ backgroundColor: `#${label.color}` }}
                            key={label.id}
                            className="issue-tag text-tag"
                        >
                            {label.name}
                        </span>
                    ))}
                </span>
                <div className="issue-desc">
                    #{data.number} opened by {data.user?.login}
                </div>
            </div>
            <div className="issue-right">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Issue;
