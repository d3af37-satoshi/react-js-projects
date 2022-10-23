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
  const [validMatch, setValidMatch] = useState(false);
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
           className={errMsg ? 'errmsg' : 'd-none'}
           aria-live='assertive'
        > {errMsg} {/* Displays errMsg[State] */}
        </p>

        <h1 className='display-1'>
          Register Form
        </h1>

        <Form>
        <div className='mb-3'>
          <label className='form-label' htmlFor='username'>
            Username:
            <span className={validName ? 'd-block-inline' : 'd-none'}>
              <AiFillCheckCircle className='text-success' />
            </span>
            <span className={validName || !user ? 'd-none' : 'd-block-inline'}>
              <AiFillCloseCircle className='text-danger' />
            </span>
          </label>
          <input
            className="form-control {userFocus && user && !validName ? 'd-block' : 'd-none'}"
            type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? 'false' : 'true'}
            aria-describedby='uidnote'
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <p id='uidnote'
             className={userFocus && user && !validName ? 'mt-3 form-text alert alert-danger d-block' : 'd-none'}
          >
          <AiOutlineExclamationCircle /> 4 to 24 Characters, Must start with a Letter. Numbers, Underscores, Hyphen Allowed.
          </p>
        </div>
          
        <div className='mb-3'>
          <label className='form-label' htmlFor='password'>
            Password:
            <span className={validPwd ? 'd-block-inline' : 'd-none'}>
              <AiFillCheckCircle className='text-success' />
            </span>
            <span className={validPwd || !pwd ? 'd-none' : 'd-block-inline'}>
              <AiFillCloseCircle className='text-danger' />
            </span>
          </label>
          <input
            className="form-control {userFocus && user && !validName ? 'd-block' : 'd-none'}"
            type='password'
            id='password'
            onChange={(e) => setPwd(e.target.value)}
            required
            aria-invalid={validPwd ? 'false' : 'true'}
            aria-describedby='pwdnote'
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p id='pwdnote'
             className={pwdFocus && !validPwd ? 'mt-3 form-text alert alert-danger d-block' : 'd-none'}
          >
          <AiOutlineExclamationCircle /> 8 to 24 Characters, Must include Uppercase, Lower, Number and Special(!@#$%) 
          </p>
        </div>

        <div className='mb-3'>
          <label className='form-label' htmlFor='confirm_pwd'>
            Confirm Password:
            <span className={validMatch && matchPwd ? 'd-block-inline' : 'd-none'}>
              <AiFillCheckCircle className='text-success' />
            </span>
            <span className={validMatch || !matchPwd ? 'd-none' : 'd-block-inline'}>
              <AiFillCloseCircle className='text-danger' />
            </span>
          </label>
          <input
            className="form-control {userFocus && user && !validName ? 'd-block' : 'd-none'}"
            type='password'
            id='confirm_pwd'
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? 'false' : 'true'}
            aria-describedby='confirmnote'
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p id='confirmnote'
             className={matchFocus && !validMatch ? 'mt-3 form-text alert alert-danger d-block' : 'd-none'}
          >
          <AiOutlineExclamationCircle /> Passwords must be the same!
          </p>
        </div>
        
        {/* IF NOT validName OR NOT validPwd etc... set disabled to true*/}
        <button disabled={!validName || !validPwd || !validMatch ? true : false}>
          Sign Up
        </button>

        <p>
          Already Registered?<br />
          <a href='#reactrouterlink'>Sign In</a>
        </p>

        </Form>
      </Container>
    </section>
  );
}

export default Register;
