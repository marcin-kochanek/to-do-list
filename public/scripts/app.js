'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDoApp = function (_React$Component) {
  _inherits(ToDoApp, _React$Component);

  function ToDoApp(props) {
    _classCallCheck(this, ToDoApp);

    var _this = _possibleConstructorReturn(this, (ToDoApp.__proto__ || Object.getPrototypeOf(ToDoApp)).call(this, props));

    _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      subtitle: 'Put your life in the hands of a computer.',
      tasks: props.tasks
    };
    return _this;
  }

  _createClass(ToDoApp, [{
    key: 'handleDeleteTasks',
    value: function handleDeleteTasks() {
      this.setState(function () {
        return {
          tasks: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNumber = Math.floor(Math.random() * this.state.tasks.length);
      var pickedTask = this.state.tasks[randomNumber];
      alert(pickedTask);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(task) {
      if (!task) {
        return 'Enter valid value to add item';
      } else if (this.state.tasks.indexOf(task) > -1) {
        return 'This task already exists';
      }

      this.setState(function (prevState) {
        return {
          tasks: prevState.tasks.concat(task)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: this.state.subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.tasks.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          tasks: this.state.tasks,
          handleDeleteTasks: this.handleDeleteTasks
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return ToDoApp;
}(React.Component);

ToDoApp.defaultProps = {
  tasks: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'ToDo App'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do first?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteTasks },
      'Remove all'
    ),
    props.tasks.map(function (task) {
      return React.createElement(Option, { key: task, taskText: task });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.taskText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var task = e.target.elements.task.value.trim();
      var error = this.props.handleAddOption(task);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'task' }),
          React.createElement(
            'button',
            null,
            'Add task'
          )
        ),
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

ReactDOM.render(React.createElement(ToDoApp, null), document.getElementById('app'));
