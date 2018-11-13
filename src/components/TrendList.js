import React from "react";
import Icon from "./Icon";

const TrendList = ({ trends }) => {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <div className="trend-list card">
      <div className="card__body">
        <h3 className="trend-list__title">
          Trends{" "}
          <small>
            • <a href="#">Change</a>
          </small>
        </h3>
        <ul className="trend-list__list">
          {trends.map((trend, i) => (
            <li className="trend-list__item" key={`trend-${i}`}>
              <a className="trend-list__item-link" href={trend.url}>
                {trend.name}
              </a>
              {trend.promoted && (
                <a className="trend-list__promoted" href="#">
                  <Icon
                    className="trend-list__promoted-icon"
                    type="icon-link"
                  />
                  <span className="trend-list__promoted-text">Promoted</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrendList;
