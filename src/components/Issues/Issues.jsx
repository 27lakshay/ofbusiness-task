import React, { useState, useEffect, useRef, useCallback } from "react";

import { getIssues } from "../../utils/api";

import Issue from "./Issue/Issue";

import "./issues.css";

const Issues = () => {
    const [pageOffset, setPageOffset] = useState(1);
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasMore, setHasMore] = useState(true);

    const FILTERS = [
        { title: "Author" },
        { title: "Label" },
        { title: "Projects" },
        { title: "Milestones" },
        { title: "Assignee" },
        { title: "Sort" },
    ];

    useEffect(() => {
        getIssues(pageOffset)
        .then((response) => response.json())
        .then((response) => {
            let newData = [...issues, ...response];
            setIssues(newData);
            console.log(newData);
        });
    }, [pageOffset]);

    const observer = useRef();
    const lastItemRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageOffset((prevPageOffset) => prevPageOffset + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <main className="issues-wrapper">
            <div className="issues-head">
                <div className="head-options-left">
                    <span className="head-option active">
                        <i class="fa-solid fa-exclamation"></i>
                        <span className="count">625</span> Open
                    </span>
                    <span className="head-option">
                        <i class="fa-solid fa-check"></i>
                        <span className="count">10,104</span> Closed
                    </span>
                </div>
                <div className="head-options-right">
                    {FILTERS.map((item) => (
                        <span className="head-option">{item.title}</span>
                    ))}
                </div>
            </div>
            <div className="issues-body">
                <ul className="list">
                    {issues.map((issue, index) => {
                        if (issues.length === index + 1) {
                            return (
                                <li key={issue.id} className="list-item" ref={lastItemRef}>
                                    <Issue data={issue} />
                                </li>
                            );
                        } else {
                            return (
                                <li key={issue.id} className="list-item">
                                    <Issue data={issue} />
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Issues;
