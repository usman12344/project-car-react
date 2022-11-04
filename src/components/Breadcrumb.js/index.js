import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ List }) {
  return (
    <section className="py-8 px-4 bg-yellow-100">
        <div className="container mx-auto">
            <ul className="breadcrumb text-black">
                {
                    List?.map?.((item, index) => {
                        const arias = index === List?.length ? {"aria-label": "current-page"} : {};
                        return (
                            <li key={item.url}>
                            <Link to={item.url} {...arias}>{item.name}</Link></li>
                            )

                    })
                }
            </ul>
        </div>
    </section>
  )
}

Breadcrumb.propTypes = {
    list: PropTypes.array
}
