import { useState } from 'react'
import { Eye, EyeOff, Terminal, Server, GitBranch } from 'lucide-react'

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
    <div className="min-h-screen flex bg-background">
      {/* Left - Brand Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col items-center justify-center p-12"
        style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%), hsl(210 100% 20%))' }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(210 100% 56%) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(210 100% 56% / 0.15), transparent 70%)' }}
        />

        <div className="relative z-10 text-center max-w-md">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Platform Hub</h1>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Portal interno de automação de infraestrutura, GitOps e padronização de ambientes.
          </p>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-card/50 border border-border/50">
              <Server className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Infra</div>
              <div className="text-xs text-muted-foreground mt-1">Terraform & Ansible</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border/50">
              <GitBranch className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">GitOps</div>
              <div className="text-xs text-muted-foreground mt-1">Source of Truth</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border/50">
              <Terminal className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-sm font-medium text-foreground">Pipelines</div>
              <div className="text-xs text-muted-foreground mt-1">CI/CD Automation</div>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-xl bg-card/30 border border-border/30 text-left font-mono text-sm">
            <div className="text-muted-foreground">
              <span className="text-accent">$</span> platform deploy --env production
            </div>
            <div className="text-primary mt-1">✓ Infrastructure provisioned</div>
            <div className="text-primary">✓ Services configured</div>
            <div className="text-accent">→ Ready in 2m 34s</div>
          </div>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Platform Hub</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Bem-vindo de volta</h2>
            <p className="text-muted-foreground mt-2">Entre com suas credenciais para acessar o portal</p>
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
                placeholder="usuario@empresa.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all pr-12"
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
                <input type="checkbox" className="w-4 h-4 rounded accent-primary" />
                <span className="text-sm text-muted-foreground">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm font-medium text-primary hover:underline">
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">ou continue com</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 px-4 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <GitBranch className="w-5 h-5" />
              SSO Corporativo
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-muted-foreground/60">
            Platform Hub v2.0 — Internal DevOps Portal
          </p>
        </div>
      </div>
    </div>
  )
}
