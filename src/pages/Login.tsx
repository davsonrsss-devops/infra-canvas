import { useState } from 'react'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left - Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden flex-col items-center justify-center text-primary-foreground p-12">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-white/5" />

        <div className="relative z-10 text-center max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <ShieldCheck className="w-12 h-12" />
            <h1 className="text-4xl font-bold tracking-tight">Panvel</h1>
          </div>
          <p className="text-xl font-medium mb-4 text-white/90">
            Farmácias
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            Acesse sua conta para gerenciar pedidos, acompanhar entregas e aproveitar ofertas exclusivas.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-white/60 mt-1">Lojas</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30k+</div>
              <div className="text-sm text-white/60 mt-1">Produtos</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5M+</div>
              <div className="text-sm text-white/60 mt-1">Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Panvel</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Bem-vindo de volta</h2>
            <p className="text-muted-foreground mt-2">Entre com seus dados para acessar sua conta</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded accent-panvel-green" />
                <span className="text-sm text-muted-foreground">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-panvel-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <a href="#" className="font-semibold text-primary hover:underline">
              Cadastre-se
            </a>
          </p>

          <p className="mt-6 text-center text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Panvel Farmácias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
