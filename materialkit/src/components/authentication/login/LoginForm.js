import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Link as RouterLink, usehistory, useLocation } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Button,
  Typography,
  Grid
} from '@mui/material';
import { login } from 'src/Redux/Action/userActions';
import { useNavigate } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function LoginForm() {
  let location = useLocation();
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split('=')[1] : '/dashboard/home';
  console.log(redirect);

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          {error && (
            <Grid item xs={12} sm={6} md={12}>
              <Accordion
                sx={{
                  backgroundColor: '#c20202',
                  borderRadius: 0.2,
                  alignItems: 'center'
                }}
              >
                <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h8" justifyContent="space-between">
                    <span className="error-message">{error}</span>
                  </Typography>
                </AccordionSummary>
              </Accordion>
            </Grid>
          )}
        </Stack>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="off"
            size="large"
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={error}
          />

          <TextField
            fullWidth
            autoComplete="off"
            size="large"
            // autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            // {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={error}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={(e) => {
            submitHandler(e);
          }}
          // loading={isSubmitting}
        >
          Login
        </Button>
      </Form>
    </FormikProvider>
  );
}
