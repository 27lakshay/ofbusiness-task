import React, { useState, useEffect, useRef, useCallback } from "react";

import { getIssues } from "../../utils/api";

import Issue from "./Issue/Issue";

import "./issues.css";

const FILTERS = [
    { title: "Author" },
    { title: "Label" },
    { title: "Projects" },
    { title: "Milestones" },
    { title: "Assignee" },
    { title: "Sort" },
];

const Issues = () => {
    const [pageOffset, setPageOffset] = useState(1);
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [hasMore, setHasMore] = useState(false);

    const observer = useRef();

    useEffect(() => fetchIssues(pageOffset), [pageOffset]);

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

    const fetchIssues = (pageOffset) => {
        setLoading(true);
        getIssues(pageOffset)
            .then((response) => response.json())
            .then((response) => {
                let newData = [...issues, ...response];
                setHasMore(response.length > 0);
                setIssues(newData);
                setLoading(false);
            })
            .catch((e) => {
                setErrorMessage("Oops something went wrong! :(");
                console.error(e);
            });
    };

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
                <div>{loading && "Loading..."}</div>
                <div>{errorMessage && errorMessage}</div>
            </div>
        </main>
    );
};

export default Issues;
