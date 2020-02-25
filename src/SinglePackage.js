import React from 'react';
import {v4 as uuid} from 'uuid';
function singlePackage(props) {
    const p = props.data;
    return (
        <div id="single_package">
            <a id='backbutton' href='./'>Back to package view</a>
            <h1 id="package_name">{p.package}</h1>
            <h3 id="package_desc">{p.description}</h3>
            <div id="package_deps">
                <h3>Dependencies:</h3>
                <ul>{p.dependencies.map(item => {
                    return (item.not_indexed) ?
                        <li key={uuid()} className="package-link subtle">{item.name}</li>   //not indexed
                        :
                        <li key={uuid()} className="package-link"><a href={"/"+item.name}>{item.name}</a></li>;  //indexed
                })}</ul>
            </div>
            <div id="package_revd">
                <h3>Reverse dependencies:</h3>
                <ul>{p.reverse_dependencies.map(item => {
                    return (item.not_indexed) ?
                        <li key={uuid()} className="package-link subtle">{item.name}</li>   //not indexed
                        :
                        <li key={uuid()} className="package-link"><a href={"/" + item.name}>{item.name}</a></li>;  //indexed
                })}</ul>
            </div>
        </div>
    );
}

export default singlePackage;