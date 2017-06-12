var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3> Examples Component </h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to tey out:</p>
            <ol>
                <li>
                    <Link to="/?location=Alicante">Alicante, Spain</Link>
                </li>
                <li>
                    <Link to="/?location=Barcelona">Barcelona, Spain</Link>
                </li>
                <li>
                    <Link to="/?location=Madrid">Madrid, Spain</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;
