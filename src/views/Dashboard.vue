<template>
  <div class="min-h-screen bg-[#f7f5ef] text-[#14202b] antialiased font-sans">
    <!-- HEADER -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-[rgba(247,245,239,0.94)] border-b border-[rgba(226,229,223,0.9)] backdrop-blur-[18px]"
    >
      <div
        class="w-[min(1180px,calc(100%-48px))] mx-auto min-h-[76px] flex items-center justify-between gap-8 max-[700px]:w-[calc(100%-32px)] max-[700px]:min-h-[67px]"
      >
        <!-- Logo -->
        <a
          href="#top"
          class="flex items-center gap-2.5"
          @click="closeMobileMenu"
        >
          <img
            src="@/assets/budgetlogo.png"
            alt="BudgetVault Logo"
            class="h-20 w-auto object-contain ml-5"
          />
          <div class="flex flex-col">
            <p class="font-extrabold leading-none tracking-[-1.5px]">
              <span class="block text-[32px] text-[#074033] mr-3"> Budget </span>

              <span class="block ml-[38px] -mt-1 text-[29px] text-[#D4A72C]">
                Vault
              </span>
            </p>

            <span
              class="ml-[39px] mt-1 h-[3px] w-[38px] rounded-full bg-[#D4A72C]"
            ></span>
          </div>
          <span
            class="block mt-1 text-[#899391] text-[7px] font-black tracking-[0.13em]"
            >SPENDING CONTROL</span
          >
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden min-[1001px]:flex gap-8">
          <a
            href="#features"
            class="text-[#647075] text-[10px] font-extrabold hover:text-[#168064] transition-colors"
            >Features</a
          >
          <a
            href="#vaults"
            class="text-[#647075] text-[10px] font-extrabold hover:text-[#168064] transition-colors"
            >Vaults</a
          >
          <a
            href="#how-it-works"
            class="text-[#647075] text-[10px] font-extrabold hover:text-[#168064] transition-colors"
            >How it works</a
          >
          <a
            href="#security"
            class="text-[#647075] text-[10px] font-extrabold hover:text-[#168064] transition-colors"
            >Security</a
          >
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden min-[701px]:flex items-center gap-3">
          <button
            type="button"
            class="min-h-[46px] px-3.5 bg-transparent text-[#14202b] text-[10px] font-extrabold hover:text-[#168064] transition-colors"
            @click="goToLogin"
          >
            Login
          </button>
          <button
            type="button"
            class="min-h-[46px] px-5 inline-flex items-center justify-center gap-2 rounded-[11px] bg-[#168064] text-white text-[11px] font-extrabold shadow-[0_7px_18px_rgba(22,128,100,0.16)] hover:bg-[#116f58] hover:-translate-y-0.5 transition-all"
            @click="goToSignup"
          >
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          type="button"
          class="min-[1001px]:hidden w-10 h-10 border border-[#e2e5df] rounded-[10px] bg-white text-lg"
          aria-label="Open menu"
          @click="toggleMobileMenu"
        >
          ☰
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="absolute top-[76px] left-4 right-4 p-4 bg-white border border-[#e2e5df] rounded-[15px] shadow-[0_15px_40px_rgba(20,40,34,0.09)] max-[700px]:top-[67px]"
      >
        <a
          href="#features"
          class="block w-full py-3.5 px-3 rounded-lg text-left text-[11px] font-extrabold hover:bg-[#e9f5ef] hover:text-[#168064]"
          @click="closeMobileMenu"
          >Features</a
        >
        <a
          href="#vaults"
          class="block w-full py-3.5 px-3 rounded-lg text-left text-[11px] font-extrabold hover:bg-[#e9f5ef] hover:text-[#168064]"
          @click="closeMobileMenu"
          >Vaults</a
        >
        <a
          href="#how-it-works"
          class="block w-full py-3.5 px-3 rounded-lg text-left text-[11px] font-extrabold hover:bg-[#e9f5ef] hover:text-[#168064]"
          @click="closeMobileMenu"
          >How it works</a
        >
        <a
          href="#security"
          class="block w-full py-3.5 px-3 rounded-lg text-left text-[11px] font-extrabold hover:bg-[#e9f5ef] hover:text-[#168064]"
          @click="closeMobileMenu"
          >Security</a
        >
        <button
          type="button"
          class="block w-full py-3.5 px-3 rounded-lg text-left text-[11px] font-extrabold hover:bg-[#e9f5ef] hover:text-[#168064]"
          @click="goToLogin"
        >
          Login
        </button>
        <button
          type="button"
          class="block w-full py-3.5 px-3 mt-2 rounded-lg bg-[#168064] text-white text-center text-[11px] font-extrabold"
          @click="goToSignup"
        >
          Get Started
        </button>
      </div>
    </header>

    <main id="top">
      <!-- HERO -->
      <section
        class="pt-[155px] pb-[90px] bg-[radial-gradient(circle_at_78%_35%,rgba(22,128,100,0.12),transparent_34%)] bg-[#f7f5ef] max-[700px]:pt-[120px]"
      >
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto max-[700px]:w-[calc(100%-32px)]"
        >
          <div
            class="grid grid-cols-1 min-[1001px]:grid-cols-[minmax(0,0.95fr)_minmax(430px,1.05fr)] items-center gap-[70px]"
          >
            <!-- Hero Copy -->
            <div class="min-[1001px]:text-left text-center">
              <div
                class="inline-flex items-center gap-2 px-3 py-2 border border-[#e2e5df] rounded-full bg-white text-[#168064] text-[8px] font-black shadow-[0_5px_18px_rgba(20,40,34,0.06)]"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#168064]"></span>
                Built for intentional money management
              </div>

              <h1
                class="mt-[18px] text-[clamp(39px,5.5vw,72px)] leading-[0.98] tracking-[-0.06em] font-black max-[700px]:text-[44px] max-[430px]:text-[39px]"
              >
                Give every
                <span class="block text-[#168064]">naira a job.</span>
              </h1>

              <p
                class="max-w-[560px] mt-[22px] text-[#6f7b80] text-sm leading-relaxed mx-auto min-[1001px]:mx-0"
              >
                BudgetVault brings your spending, savings, bills, goals and
                financial plans into one intelligent workspace — so you can
                understand your money and make better decisions with it.
              </p>

              <div
                class="flex gap-2.5 mt-7 flex-wrap justify-center min-[1001px]:justify-start max-[700px]:flex-col"
              >
                <button
                  type="button"
                  class="min-h-[51px] px-[23px] inline-flex items-center justify-center gap-2 rounded-[11px] bg-[#168064] text-white text-[11px] font-extrabold shadow-[0_7px_18px_rgba(22,128,100,0.16)] hover:bg-[#116f58] hover:-translate-y-0.5 transition-all max-[700px]:w-full"
                  @click="goToSignup"
                >
                  Create your BudgetVault →
                </button>
                <button
                  type="button"
                  class="min-h-[51px] px-[23px] inline-flex items-center justify-center gap-2 rounded-[11px] bg-white text-[#14202b] border border-[#e2e5df] text-[11px] font-extrabold hover:-translate-y-0.5 transition-all max-[700px]:w-full"
                  @click="goToLogin"
                >
                  Login
                </button>
              </div>

              <p
                class="mt-5 text-[#818b8d] text-[8px] min-[1001px]:text-left text-center"
              >
                <strong class="text-[#168064]">✓</strong>
                Secure financial experience &nbsp; • &nbsp; Built around user
                control
              </p>
            </div>

            <!-- Dashboard Preview -->
            <div>
              <div
                class="relative p-[22px] bg-white border border-[#e2e5df] rounded-[23px] shadow-[0_28px_70px_rgba(15,40,32,0.14)] rotate-1 max-[700px]:rotate-0 max-[700px]:p-3.5"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <div
                      class="text-[#899391] text-[7px] font-black tracking-[0.13em]"
                    >
                      FINANCIAL OVERVIEW
                    </div>
                    <div class="mt-1.5 text-base font-black">
                      Good morning 👋
                    </div>
                  </div>
                  <div
                    class="w-9 h-9 grid place-items-center rounded-full bg-[#e9f5ef] text-[#168064] text-[10px] font-black"
                  >
                    A
                  </div>
                </div>

                <div
                  class="mt-[18px] p-[19px] flex items-center justify-between rounded-[15px] bg-gradient-to-br from-[#073f32] to-[#0c5141] text-white"
                >
                  <div>
                    <div class="text-[#acd1c5] text-[8px]">Total balance</div>
                    <div
                      class="mt-1.5 text-[25px] font-black max-[430px]:text-xl"
                    >
                      ₦428,500
                    </div>
                  </div>
                  <span
                    class="px-2.5 py-1.5 rounded-full bg-white/10 text-[#a6e3d0] text-[7px] font-black"
                    >Healthy</span
                  >
                </div>

                <div
                  class="grid grid-cols-2 gap-2.5 mt-2.5 max-[430px]:grid-cols-1"
                >
                  <div
                    class="p-3.5 border border-[#e9ece8] rounded-[13px] bg-[#f9faf8]"
                  >
                    <small class="block text-[#899391] text-[7px] font-black"
                      >SAVINGS</small
                    >
                    <strong class="block mt-1.5 text-base">₦84,000</strong>
                    <div
                      class="h-1.5 mt-2.5 overflow-hidden rounded-full bg-[#e0e8e3]"
                    >
                      <span class="block w-[72%] h-full bg-[#168064]"></span>
                    </div>
                  </div>
                  <div
                    class="p-3.5 border border-[#e9ece8] rounded-[13px] bg-[#f9faf8]"
                  >
                    <small class="block text-[#899391] text-[7px] font-black"
                      >SAFE TO SPEND</small
                    >
                    <strong class="block mt-1.5 text-base">₦31,800</strong>
                    <small class="block mt-1 text-[#899391] text-[7px]"
                      >Available this week</small
                    >
                  </div>
                </div>

                <div
                  class="mt-3 p-[15px] border border-[#e8ebe7] rounded-[14px]"
                >
                  <div class="flex justify-between">
                    <strong class="text-[9px]">Smart Vaults</strong>
                    <span class="text-[#168064] text-[7px] font-black"
                      >View all</span
                    >
                  </div>

                  <div
                    class="flex items-center gap-2.5 mt-3.5 pt-3.5 border-t border-[#eef0ed]"
                  >
                    <div
                      class="w-[31px] h-[31px] grid place-items-center rounded-lg bg-[#e9f5ef] text-[#168064]"
                    >
                      ◈
                    </div>
                    <div class="flex-1">
                      <strong class="block text-[8px]">Emergency Fund</strong>
                      <small class="block mt-1 text-[#899391] text-[7px]"
                        >₦144,000 protected</small
                      >
                    </div>
                    <span class="text-[#168064] text-[8px] font-black"
                      >72%</span
                    >
                  </div>

                  <div
                    class="flex items-center gap-2.5 mt-3.5 pt-3.5 border-t border-[#eef0ed]"
                  >
                    <div
                      class="w-[31px] h-[31px] grid place-items-center rounded-lg bg-[#e9f5ef] text-[#168064]"
                    >
                      ◎
                    </div>
                    <div class="flex-1">
                      <strong class="block text-[8px]">New Laptop</strong>
                      <small class="block mt-1 text-[#899391] text-[7px]"
                        >₦180,000 saved</small
                      >
                    </div>
                    <span class="text-[#168064] text-[8px] font-black"
                      >60%</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRUST STRIP -->
      <section class="py-5 bg-white border-y border-[#e2e5df]">
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto flex items-center justify-between gap-6 max-[700px]:w-[calc(100%-32px)] max-[700px]:flex-col max-[700px]:items-start"
        >
          <span class="text-[#7d8787] text-[8px] font-extrabold"
            >One financial workspace for everyday money management</span
          >
          <div
            class="flex gap-6 text-[#7c8585] text-[8px] font-bold max-[700px]:flex-wrap max-[700px]:gap-3"
          >
            <span>Bank connections</span>
            <span>Secure cards</span>
            <span>Smart budgeting</span>
            <span>Protected vaults</span>
          </div>
        </div>
      </section>

      <!-- FEATURES -->
      <section id="features" class="py-[100px]">
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto max-[700px]:w-[calc(100%-32px)]"
        >
          <div class="max-w-[680px] mx-auto mb-[50px] text-center">
            <div class="text-[#168064] text-[9px] font-black tracking-[0.14em]">
              THE WORKSPACE
            </div>
            <h2
              class="mt-3 text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.05em] font-black"
            >
              Everything you need to
              <span class="text-[#168064]">understand your money.</span>
            </h2>
            <p class="mt-4 text-[#6f7b80] text-xs leading-relaxed">
              BudgetVault brings the essential tools for planning, tracking,
              protecting and improving your financial life into one place.
            </p>
          </div>

          <div
            class="grid grid-cols-1 min-[701px]:grid-cols-2 min-[1001px]:grid-cols-3 gap-3.5"
          >
            <div
              v-for="feature in features"
              :key="feature.title"
              class="p-6 min-h-[220px] bg-white border border-[#e2e5df] rounded-[18px] shadow-[0_5px_18px_rgba(20,40,34,0.06)] hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(20,40,34,0.09)] transition-all"
            >
              <div
                class="w-[42px] h-[42px] grid place-items-center rounded-[11px] bg-[#e9f5ef] text-[#168064] font-black"
              >
                {{ feature.icon }}
              </div>
              <h3 class="mt-5 text-[13px] font-bold">{{ feature.title }}</h3>
              <p class="mt-2.5 text-[#6f7b80] text-[10px] leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- VAULTS -->
      <section id="vaults" class="py-[100px] bg-[#efede5]">
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto max-[700px]:w-[calc(100%-32px)]"
        >
          <div class="max-w-[680px] mx-auto mb-[50px] text-center">
            <div class="text-[#168064] text-[9px] font-black tracking-[0.14em]">
              ONE PLATFORM
            </div>
            <h2
              class="mt-3 text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.05em] font-black"
            >
              A vault for
              <span class="text-[#168064]">the way you live.</span>
            </h2>
            <p class="mt-4 text-[#6f7b80] text-xs leading-relaxed">
              Your financial life isn't the same as everyone else's. BudgetVault
              adapts to the way you manage money.
            </p>
          </div>

          <div
            class="grid grid-cols-1 min-[701px]:grid-cols-2 min-[1001px]:grid-cols-4 gap-3.5"
          >
            <div
              v-for="vault in vaults"
              :key="vault.title"
              class="min-h-[245px] p-[22px] relative bg-white border border-[#e2e5df] rounded-[18px]"
            >
              <div
                class="w-[42px] h-[42px] grid place-items-center rounded-[11px] bg-[#e9f5ef] text-[#168064] text-base font-black"
              >
                {{ vault.icon }}
              </div>
              <h3 class="mt-[22px] text-[15px] font-bold">{{ vault.title }}</h3>
              <p class="mt-2.5 text-[#6f7b80] text-[10px] leading-relaxed">
                {{ vault.description }}
              </p>
              <button
                type="button"
                class="absolute left-[22px] bottom-5 border-0 bg-transparent text-[#168064] text-[9px] font-black"
                @click="showMessage(vault.title)"
              >
                Explore →
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how-it-works" class="py-[100px]">
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto max-[700px]:w-[calc(100%-32px)]"
        >
          <div class="max-w-[680px] mx-auto mb-[50px] text-center">
            <div class="text-[#168064] text-[9px] font-black tracking-[0.14em]">
              HOW IT WORKS
            </div>
            <h2
              class="mt-3 text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.05em] font-black"
            >
              Simple from
              <span class="text-[#168064]">day one.</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 min-[701px]:grid-cols-3 gap-9">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="pt-5 border-t-2 border-[#e2e5df]"
            >
              <div class="text-[#168064] text-[9px] font-black">
                0{{ index + 1 }}
              </div>
              <h3 class="mt-[18px] text-sm font-bold">{{ step.title }}</h3>
              <p class="mt-2 text-[#6f7b80] text-[10px] leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECURITY -->
      <section id="security" class="py-[70px] bg-[#e9f3ee]">
        <div
          class="w-[min(1180px,calc(100%-48px))] mx-auto grid grid-cols-1 min-[701px]:grid-cols-[auto_1fr] min-[1001px]:grid-cols-[auto_1fr_1fr] items-center gap-8 max-[700px]:w-[calc(100%-32px)] max-[700px]:text-center"
        >
          <div
            class="w-[62px] h-[62px] grid place-items-center rounded-[17px] bg-white text-[25px] shadow-[0_5px_18px_rgba(20,40,34,0.06)] max-[700px]:mx-auto"
          >
            🛡
          </div>

          <div>
            <div class="text-[#168064] text-[9px] font-black tracking-[0.14em]">
              SECURITY FIRST
            </div>
            <h2 class="mt-2 text-[27px] tracking-[-0.04em] font-black">
              Your money deserves serious protection.
            </h2>
            <p class="mt-2 text-[#6f7b80] text-[10px] leading-relaxed">
              BudgetVault is designed around secure financial experiences, clear
              permissions and user control.
            </p>
          </div>

          <div
            class="grid grid-cols-1 min-[701px]:grid-cols-2 gap-2.5 min-[1001px]:col-auto col-span-full"
          >
            <div
              v-for="item in securityItems"
              :key="item"
              class="p-3 bg-white border border-[#dce7e1] rounded-[10px] text-[8px] font-extrabold"
            >
              <span class="text-[#168064] mr-1.5">✓</span>{{ item }}
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-[110px] px-5 text-center">
        <div class="text-[#168064] text-[9px] font-black tracking-[0.14em]">
          YOUR MONEY. YOUR PLAN.
        </div>
        <h2
          class="max-w-[700px] mx-auto mt-3 text-[clamp(35px,5vw,54px)] leading-none tracking-[-0.055em] font-black"
        >
          Ready to build better money habits?
        </h2>
        <p
          class="max-w-[560px] mx-auto mt-4 mb-7 text-[#6f7b80] text-xs leading-relaxed"
        >
          Start with BudgetVault and turn your financial intentions into a
          system you can actually use.
        </p>
        <button
          type="button"
          class="min-h-[51px] px-[23px] inline-flex items-center justify-center gap-2 rounded-[11px] bg-[#168064] text-white text-[11px] font-extrabold shadow-[0_7px_18px_rgba(22,128,100,0.16)] hover:bg-[#116f58] hover:-translate-y-0.5 transition-all"
          @click="goToSignup"
        >
          Get Started →
        </button>
      </section>
    </main>

    <!-- FOOTER -->
    <footer class="py-7 bg-[#102d26] text-[#9db7ae]">
      <div
        class="w-[min(1180px,calc(100%-48px))] mx-auto flex items-center justify-between max-[700px]:w-[calc(100%-32px)] max-[700px]:flex-col max-[700px]:gap-4"
      >
        <a href="#top" class="flex items-center gap-2.5">
          <img
            src="@/assets/budgetlogo.png"
            alt="BudgetVault Logo"
            class="h-20 w-auto object-contain ml-5"
          />
          <span>
            <span class="block text-white text-[15px] font-black"
              >BudgetVault</span
            >
            <span
              class="block mt-1 text-[#899391] text-[7px] font-black tracking-[0.13em]"
              >SPENDING CONTROL</span
            >
          </span>
        </a>
        <span>© 2026 BudgetVault</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenuOpen = ref(false);

const features = [
  {
    icon: "◈",
    title: "Smart Vaults",
    description:
      "Separate money for bills, savings, goals and everyday spending.",
  },
  {
    icon: "▣",
    title: "Budget Planner",
    description:
      "Build a realistic monthly plan around your income, commitments and goals.",
  },
  {
    icon: "↔",
    title: "Expense Tracking",
    description:
      "Understand where your money goes without digging through multiple statements.",
  },
  {
    icon: "★",
    title: "Bill Settlement",
    description:
      "Keep important commitments visible and stay ahead of your bills.",
  },
  {
    icon: "◎",
    title: "Goals & Dreams",
    description: "Turn the things you want into visible financial progress.",
  },
  {
    icon: "✦",
    title: "AI Coach",
    description:
      "Get contextual guidance that helps you understand your financial decisions.",
  },
];

const vaults = [
  {
    icon: "◈",
    title: "Smart Vault",
    description:
      "Organise your money around bills, savings, spending and the things that matter most.",
  },
  {
    icon: "♥",
    title: "Couple Vault",
    description: "Plan, save and manage shared financial goals together.",
  },
  {
    icon: "▣",
    title: "Business Vault",
    description:
      "Give business finances their own workspace for operations and growth.",
  },
  {
    icon: "🎓",
    title: "Student Vault",
    description:
      "Manage allowances, spending and financial goals in one focused experience.",
  },
];

const steps = [
  {
    title: "Create your account",
    description:
      "Set up your BudgetVault profile and define what you want your money to achieve.",
  },
  {
    title: "Connect your finances",
    description:
      "Link supported banks and cards through the secure onboarding experience.",
  },
  {
    title: "Take control",
    description: "Use vaults, budgets, tracking and goals to stay on course.",
  },
];

const securityItems = [
  "Secure authentication",
  "Controlled bank connections",
  "Card management",
  "User-controlled access",
];

function goToSignup() {
  window.location.href = "https://budget-vault-dusky.vercel.app/register";
}

function goToLogin() {
  window.location.href = "https://budget-vault-dusky.vercel.app/";
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

function showMessage(name) {
  alert(`${name} will connect to the BudgetVault application.`);
}

function handleClickOutside(event) {
  const menu = document.querySelector("[data-mobile-menu]");
  const button = document.querySelector("[data-mobile-btn]");
  // Simple outside click handling via event target check in template if needed
  if (mobileMenuOpen.value && !event.target.closest("header")) {
    mobileMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
