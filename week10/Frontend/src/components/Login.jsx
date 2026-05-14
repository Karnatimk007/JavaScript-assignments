import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../store/authStore'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'
import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass,
  bodyText,
} from '../styles/common'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      role: 'user',
      email: '',
      password: '',
    }
  })
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState(null)

  const login = useAuth(state => state.login)
  const currentUser = useAuth(state => state.currentUser)   // capital U — matches store
  const isAuthenticated = useAuth(state => state.isAuthenticated)
  const navigate = useNavigate()

  const onUserLogin = async (formData) => {
    console.log('[LOGIN FORM] Submitted data:', JSON.stringify(formData))
    try {
      setLoading(true)
      setLoginError(null)
      await login(formData)
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Login failed'
      setLoginError(msg)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === 'USER') {
        navigate('/user-profile')
        toast.success('Logged in successfully')
      } else if (currentUser.role === 'AUTHOR') {
        navigate('/author-profile/articles')
        toast.success('Logged in as Author')
      } else if (currentUser.role === 'ADMIN') {
        navigate('/admin-profile')
        toast.success('Logged in as Admin')
      }
    }
  }, [isAuthenticated, currentUser, navigate])

  return (
    <div className={`${pageBackground} flex items-center justify-center py-20`}>
      <div className={formCard}>
        <h2 className={formTitle}>Sign In</h2>

        {/* Error message */}
        {loginError && <p className={`${errorClass} mb-5`}>{loginError}</p>}
        {/* Loading */}
        {loading && <p className={loadingClass}>Signing in…</p>}

        <form onSubmit={handleSubmit(onUserLogin)} className="flex flex-col gap-1">

          {/* Role selection */}
          <div className={formGroup}>
            <p className={labelClass}>Select Role</p>
            <div className="flex gap-4 mt-1">
              <label className={`${bodyText} flex items-center gap-2 cursor-pointer`}>
                <input type="radio" {...register('role', { required: true })} value="user" /> User
              </label>
              <label className={`${bodyText} flex items-center gap-2 cursor-pointer`}>
                <input type="radio" {...register('role', { required: true })} value="author" /> Author
              </label>
              <label className={`${bodyText} flex items-center gap-2 cursor-pointer`}>
                <input type="radio" {...register('role', { required: true })} value="admin" /> Admin
              </label>
            </div>
          </div>

          {/* Email */}
          <div className={formGroup}>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email', { required: 'Email is required' })}
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <div className="flex items-center justify-between mb-1">
              <label className={`${labelClass} mb-0`}>Password</label>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">Forgot password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              {...register('password', { required: 'Password is required' })}
              className={inputClass}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          <button type="submit" className={submitBtn} disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login