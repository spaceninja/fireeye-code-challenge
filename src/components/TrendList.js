import React from "react";
import Icon from "./Icon";

class TrendList extends React.Component {
  render() {
    return (
      <div className="trend-list card">
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <div className="card__body">
          <h3 className="trend-list__title">
            Trends{" "}
            <small>
              • <a href="#">Change</a>
            </small>
          </h3>
          <ul className="trend-list__list">
            {this.props.trends.map((trend, i) => (
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
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </div>
    );
  }
}

export default TrendList;
