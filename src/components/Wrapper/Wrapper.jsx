import "./wrapper.css";

const Wrapper = (props) => {
    const TABS = [
        { title: "Code", iconClass: "fa-code" },
        { title: "Issues", iconClass: "fa-exclamation", count: "625", active: true },
        { title: "Pull Requests", iconClass: "fa-code-pull-request", count: "208" },
        { title: "Actions", iconClass: "fa-play" },
        { title: "Projects", iconClass: "fa-book" },
        { title: "Wiki", iconClass: "fa-book-open" },
        { title: "Security", iconClass: "fa-shield-halved" },
        { title: "Insights", iconClass: "fa-chart-line" },
    ];

    return (
        <div className="wrapper">
            <ul className="wrapper-tabs">
                {TABS.map((tab) => (
                    <li className={`wrapper-tab-button ${tab.active ? "active" : ""}`}>
                        <i class={`fa-solid ${tab.iconClass}`}></i>
                        {tab.title}
                        {tab.count ? <span className="count">{tab.count}</span> : ""}
                    </li>
                ))}
            </ul>
            <div className="wrapper-tab-component">{props.children}</div>
        </div>
    );
};

export default Wrapper;
