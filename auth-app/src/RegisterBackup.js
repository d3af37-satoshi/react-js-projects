// React [Hooks]
import { useRef, useState, useEffect } from 'react';
// [React Icons]
import { AiOutlineExclamationCircle, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
// [React Bootstrap]
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// Validating Registration | Username & Password [Required]

// REQUIRED: Start with lower/upper case, 
// Followed by l/u case, num, digits, hypen or underscore
// Between (1) + 3 - 23 Characters
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// REQUIRED: 1 lower, 1 upper, 1 num, 1 special
// Between 8 - 24 Characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  // [State] / Other [Hooks] in Component

  // useRef for User Input
  const userRef = useRef();
  // useRef for Errors
  const errRef = useRef();

  // [State] Note: userFocus on that field when incorrect
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
 
  const [matchPwd, setMatchPwd] = useState('');
  const [validmatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // NOTE: Dependency array empty ' [] '
  useEffect(() => {
    // Set focus on username
    userRef.current.focus();
  }, [])

  // VALIDATE - Username 
  // NOTE: Dependency array ' [user] '
  // Anytime [user] changes will check validation of that field
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result); // RETURNS Bool
    console.log(user);
    // setValidName[USER_REGEX.test(user)]
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    // Check Passwords Match
    const match = pwd === matchPwd; // Returns Bool
    setValidMatch(match)
  }, [pwd, matchPwd])

  // NOTE: If user, pwd, matchPwd | true
  useEffect(() => {
    // Clear Error Message
    setErrMsg('');
  }, [user, pwd, matchPwd])

  return (
    <section>
      <Container>
        {/* 
        # Display Error Message 
        IF errMsg[State] exist apply class 'errmsg'
        ELSE apply class 'offscreen'
        aria-live='assertive'
        When focus set to this element with ref={errRef}
        It will be anounced with screenreader
        IMPORTANT if error exist
        */}
        <p ref={errRef}
           className={errMsg ? 'errmsg' : 'offscreen'}
           aria-live='assertive'
        > {errMsg} {/* Displays errMsg[State] */}
        </p>

        <h1 className='display-1'>
          Register Form
        </h1>

        <Form>

          <Form.Group className='mb-3'>
            {/* htmlFor attribute needs to match id of input */}
            <Form.Label htmlFor='username'>
              Username:
              {/* FOR visual cue similiar to aria-invalid */}
              {/* IF validName true then 'valid' ELSE 'hide' icon*/}
              <span className={validName ? 'valid' : 'hide'}>
                <AiFillCheckCircle />
              </span>
              {/* 
              IF validName true and user[State] does not exist
              ELSE display with className 'invalid'
              */}
              <span className={validName || !user ? 'hide' : 'invalid'}>
                <AiFillCloseCircle />
              </span>
            </Form.Label>
            <Form.Control 
              type='text'
              id='username'
              ref={userRef}
              {/* Don't want to see any previous values */}
              autoComplete='off'
              {/* Provides event(e) sets setUser[State] */}
              onChange={(e) => setUser(e.target.value)}
              required
              {/* 
              IMPORTANT attributes for accessibility 
              aria-invalid 
              - sets to true when component loads (don't have a validName)
              aria-describedby 
              - provides another element to describe input field
              */}
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby='uidnote'
              {/* onFocus when user click on input field */}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            >
            </Form.Control>
            <Form.Text 
              id='uidnote'
              {/* IF userFocus true, user field not empty, NOT validName */}
              className={userFocus && user && !validName ? 'instructions' : 'offscreen'}
            > <AiOutlineExclamationCircle /> 4 to 24 Characters, Must start with a letter, Letters, Numbers, Underscores, Hyphen Allowed.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label></Form.Label>
            <Form.Control></Form.Control>
            <Form.Text></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label></Form.Label>
            <Form.Control></Form.Control>
            <Form.Text></Form.Text>
          </Form.Group>

        </Form>
      </Container>
    </section>
  );
}

export default Register;
