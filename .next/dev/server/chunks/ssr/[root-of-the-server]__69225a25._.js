module.exports = [
  "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/compiled/next-server/app-page-turbo.runtime.dev.js",
      () =>
        require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js")
    );

    module.exports = mod;
  },
  "[project]/Downloads/b_g4jMW8LyWHK/lib/utils.ts [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["cn", () => cn]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)"
      );
    function cn(...inputs) {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "twMerge"
      ])(
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "clsx"
        ])(inputs)
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/button.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Button",
      () => Button,
      "buttonVariants",
      () => buttonVariants,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/lib/utils.ts [app-ssr] (ecmascript)"
      );
    const buttonVariants = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
      "cva"
    ])(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    );
    function Button({ className, variant, size, asChild = false, ...props }) {
      const Comp = asChild
        ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "Slot"
          ]
        : "button";
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        Comp,
        {
          "data-slot": "button",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            buttonVariants({
              variant,
              size,
              className,
            })
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/button.tsx",
          lineNumber: 52,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Header]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/image.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/components/ui/button.tsx [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/hotel.js [app-ssr] (ecmascript) <export default as Hotel>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/history.js [app-ssr] (ecmascript) <export default as History>"
      );
    ("use client");
    // --- Data Configuration ---
    const aboutLinks = [
      {
        href: "/about",
        label: "About Us",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__[
          "History"
        ],
      },
      {
        href: "/about/message/ceo",
        label: "Message From CEO",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
      },
      {
        href: "/about/message/director",
        label: "Message From Director",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
      },
      {
        href: "/about/message/principal",
        label: "Message From Principal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__[
          "User"
        ],
      },
      {
        href: "/about/mission-vision",
        label: "Mission & Vision",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__[
          "Trophy"
        ],
      },
      {
        href: "/about/facilities",
        label: "Facilities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__[
          "Building2"
        ],
      },
      {
        href: "/about/team",
        label: "Our Team",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__[
          "Users"
        ],
      },
    ];
    const programLinks = [
      {
        href: "/programs/mba",
        label: "Master in Business Administration",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__[
          "Briefcase"
        ],
      },
      {
        href: "/programs/bhm",
        label: "Bachelor in Hotel Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__[
          "Hotel"
        ],
      },
      {
        href: "/programs/babm",
        label: "Bachelor in Airlines Business Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__[
          "Globe"
        ],
      },
      {
        href: "/programs/bamm",
        label: "Bachelor in MICE (Event) Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__[
          "CalendarDays"
        ],
      },
      {
        href: "/programs/bttm",
        label: "Bachelor in Tourism & MICE Management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__[
          "Briefcase"
        ],
      },
      {
        href: "/programs/bca",
        label: "Bachelor in Computer Application",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__[
          "Cpu"
        ],
      },
    ];
    function Header() {
      const [activeMenu, setActiveMenu] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])("none");
      const isDropdownOpen = activeMenu !== "none";
      // --- Split links for two-column layouts ---
      const firstColAbout = aboutLinks.slice(0, 4);
      const secondColAbout = aboutLinks.slice(4);
      // MODIFICATION: First column gets 4, second column gets the rest
      const firstColPrograms = programLinks.slice(0, 4);
      const secondColPrograms = programLinks.slice(4);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "header",
        {
          className: "sticky top-0 z-50 w-full",
          onMouseLeave: () => setActiveMenu("none"),
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "relative z-50 bg-background/95 backdrop-blur-md border-b shadow-sm",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "mx-auto max-w-full px-6 h-20 flex items-center justify-between",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          href: "/",
                          className: "flex items-center gap-3 group",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "relative w-[100px] h-[70px]",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "default"
                                  ],
                                  {
                                    src: "/logo.png",
                                    alt: "Yeti International College Logo",
                                    fill: true,
                                    className: "object-contain",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 106,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "span",
                              {
                                className:
                                  "text-2xl font-bold tracking-tight text-foreground hidden sm:block",
                                children: "Yeti International College",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 114,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                          lineNumber: 105,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "nav",
                        {
                          className: "hidden md:flex gap-1 items-center",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              NavItem,
                              {
                                label: "Programs",
                                active: activeMenu === "programs",
                                onHover: () => setActiveMenu("programs"),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 121,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              NavItem,
                              {
                                label: "About",
                                active: activeMenu === "about",
                                onHover: () => setActiveMenu("about"),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 126,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: "#",
                                className:
                                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors",
                                children: "Events",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 131,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "default"
                              ],
                              {
                                href: "#",
                                className:
                                  "px-4 py-2 text-sm font-medium hover:text-primary transition-colors",
                                children: "News",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 137,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "pl-4",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "Button"
                                  ],
                                  {
                                    className:
                                      "rounded-full px-6 font-semibold",
                                    children: "Apply Now",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                lineNumber: 143,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                          lineNumber: 120,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                    lineNumber: 103,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                lineNumber: 102,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "AnimatePresence"
              ],
              {
                children:
                  isDropdownOpen &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "motion"
                    ].div,
                    {
                      initial: {
                        opacity: 0,
                        y: -10,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                      },
                      exit: {
                        opacity: 0,
                        y: -10,
                      },
                      transition: {
                        duration: 0.2,
                      },
                      className:
                        "absolute top-full left-0 w-full bg-background border-b shadow-xl overflow-hidden z-40",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "mx-auto max-w-7xl px-6 py-8",
                          children: [
                            activeMenu === "about" &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "grid grid-cols-12 gap-12",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "col-span-4 pr-6 border-r",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h3",
                                            {
                                              className:
                                                "text-2xl font-bold mb-4 text-primary",
                                              children: "Who We Are",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 168,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className:
                                                "text-muted-foreground text-sm leading-relaxed mb-6",
                                              children:
                                                "Yeti International College stands as a beacon of educational excellence in Nepal, fostering innovation and leadership since its inception.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 171,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "Button"
                                            ],
                                            {
                                              variant: "link",
                                              className:
                                                "p-0 h-auto text-primary font-bold",
                                              children: [
                                                "Read Our Full Story",
                                                " ",
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                                                    "ArrowRight"
                                                  ],
                                                  {
                                                    className: "ml-2 w-4 h-4",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 176,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "col-span-8",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4",
                                              children: "Explore About",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 187,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "grid grid-cols-2 gap-x-8",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "ul",
                                                  {
                                                    className:
                                                      "flex flex-col gap-2",
                                                    children: firstColAbout.map(
                                                      (link) =>
                                                        /*#__PURE__*/ (0,
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                          "jsxDEV"
                                                        ])(
                                                          ListLink,
                                                          {
                                                            ...link,
                                                          },
                                                          link.label,
                                                          false,
                                                          {
                                                            fileName:
                                                              "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 27,
                                                          },
                                                          this
                                                        )
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "ul",
                                                  {
                                                    className:
                                                      "flex flex-col gap-2",
                                                    children:
                                                      secondColAbout.map(
                                                        (link) =>
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            ListLink,
                                                            {
                                                              ...link,
                                                            },
                                                            link.label,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                              lineNumber: 200,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          )
                                                      ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 190,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                  lineNumber: 165,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            activeMenu === "programs" &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "div",
                                {
                                  className: "grid grid-cols-12 gap-12",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "col-span-4 pr-6 border-r",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h3",
                                            {
                                              className:
                                                "text-2xl font-bold mb-4 text-primary",
                                              children: "Academics",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 213,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className:
                                                "text-muted-foreground text-sm leading-relaxed mb-6",
                                              children:
                                                "Our curriculum is designed to meet global standards, ensuring you are ready for the challenges of the modern workforce.",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 216,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "bg-muted/50 p-4 rounded-lg",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "p",
                                                  {
                                                    className:
                                                      "text-xs font-medium text-muted-foreground",
                                                    children: "Next Intake",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "p",
                                                  {
                                                    className:
                                                      "font-bold text-foreground",
                                                    children:
                                                      "Fall 2025 - Applications Open",
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 221,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "col-span-8",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "h4",
                                            {
                                              className:
                                                "text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4",
                                              children: "Degree Programs",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 233,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "grid grid-cols-2 gap-x-8",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "ul",
                                                  {
                                                    className:
                                                      "flex flex-col gap-2",
                                                    children:
                                                      firstColPrograms.map(
                                                        (link) =>
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            ListLink,
                                                            {
                                                              ...link,
                                                            },
                                                            link.label,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                              lineNumber: 240,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          )
                                                      ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "ul",
                                                  {
                                                    className:
                                                      "flex flex-col gap-2",
                                                    children:
                                                      secondColPrograms.map(
                                                        (link) =>
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            ListLink,
                                                            {
                                                              ...link,
                                                            },
                                                            link.label,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                              lineNumber: 246,
                                                              columnNumber: 27,
                                                            },
                                                            this
                                                          )
                                                      ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                              lineNumber: 236,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                        lineNumber: 232,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                                  lineNumber: 210,
                                  columnNumber: 17,
                                },
                                this
                              ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                          lineNumber: 162,
                          columnNumber: 13,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                      lineNumber: 155,
                      columnNumber: 11,
                    },
                    this
                  ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                lineNumber: 153,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "AnimatePresence"
              ],
              {
                children:
                  isDropdownOpen &&
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "motion"
                    ].div,
                    {
                      initial: {
                        opacity: 0,
                      },
                      animate: {
                        opacity: 1,
                      },
                      exit: {
                        opacity: 0,
                      },
                      className:
                        "fixed inset-0 top-[80px] bg-black/20 backdrop-blur-[1px] z-30 pointer-events-none",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                      lineNumber: 261,
                      columnNumber: 11,
                    },
                    this
                  ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                lineNumber: 259,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
          lineNumber: 97,
          columnNumber: 5,
        },
        this
      );
    }
    // --- Sub Components ---
    function NavItem({ label, active, onHover }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          onMouseEnter: onHover,
          className: `
        relative px-4 py-2 cursor-pointer group flex items-center gap-1 text-sm font-medium transition-colors
        ${active ? "text-primary" : "text-foreground hover:text-primary"}
      `,
          children: [
            label,
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__[
                "ChevronDown"
              ],
              {
                className: `w-4 h-4 transition-transform duration-200 ${
                  active ? "rotate-180" : ""
                }`,
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                lineNumber: 293,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute top-full left-0 w-full h-4 bg-transparent",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                lineNumber: 298,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
          lineNumber: 285,
          columnNumber: 5,
        },
        this
      );
    }
    function ListLink({ href, label, icon: Icon }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "li",
        {
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "default"
            ],
            {
              href: href,
              className:
                "flex items-center justify-between p-3 rounded-lg hover:bg-accent group transition-all duration-200 border border-transparent hover:border-border/50",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex items-center gap-4",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "p-2 bg-primary/10 text-primary rounded-md group-hover:bg-primary group-hover:text-primary-foreground transition-colors",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            Icon,
                            {
                              className: "w-5 h-5",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                              lineNumber: 320,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                          lineNumber: 319,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "span",
                        {
                          className:
                            "text-sm font-medium text-foreground/80 group-hover:text-foreground",
                          children: label,
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                          lineNumber: 322,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                    lineNumber: 318,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                    "ChevronRight"
                  ],
                  {
                    className:
                      "w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
                    lineNumber: 326,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
              lineNumber: 314,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/header.tsx",
          lineNumber: 313,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Hero]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/react-countup/build/index.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)"
      );
    ("use client");
    // --- Icons ---
    const Icons = {
      Calendar: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 18,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
            lineNumber: 12,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Clock: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 33,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
            lineNumber: 27,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Grip: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-8 h-1 text-white/20",
            fill: "currentColor",
            viewBox: "0 0 24 4",
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "rect",
              {
                width: "24",
                height: "4",
                rx: "2",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 47,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
            lineNumber: 42,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
    };
    // --- Data for Ticker ---
    const SEAT_DATA = [
      {
        course: "B.Sc Computer Science",
        seats: 4,
        total: 60,
      },
      {
        course: "MBA Finance",
        seats: 12,
        total: 120,
      },
      {
        course: "B.Des Graphic Design",
        seats: 8,
        total: 40,
      },
      {
        course: "M.Sc Data Science",
        seats: 3,
        total: 30,
      },
      {
        course: "BBA Marketing",
        seats: 15,
        total: 100,
      },
      {
        course: "Cybersecurity",
        seats: 2,
        total: 25,
      },
    ];
    // 1. Video Carousel
    const VideoCarousel = () => {
      const [emblaRef, emblaApi] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "default"
      ])(
        {
          loop: true,
          duration: 60,
        },
        [
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "default"
          ])({
            delay: 8000,
            stopOnInteraction: false,
          }),
        ]
      );
      const [selectedIndex, setSelectedIndex] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])(0);
      const videos = [
        "https://www.pexels.com/download/video/6187887/",
        "https://www.pexels.com/download/video/34642433/",
        "https://www.pexels.com/download/video/3366872/",
      ];
      const scrollTo = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useCallback"
      ])((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => {
          emblaApi.off("select", onSelect);
        };
      }, [emblaApi]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "absolute inset-0 overflow-hidden -z-10",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "h-full",
                ref: emblaRef,
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex h-full",
                    children: videos.map((videoSrc, index) =>
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "relative flex-[0_0_100%] h-full",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "video",
                            {
                              className:
                                "absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2",
                              src: videoSrc,
                              autoPlay: true,
                              loop: true,
                              muted: true,
                              playsInline: true,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                              lineNumber: 95,
                              columnNumber: 15,
                            },
                            ("TURBOPACK compile-time value", void 0)
                          ),
                        },
                        index,
                        false,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                          lineNumber: 94,
                          columnNumber: 13,
                        },
                        ("TURBOPACK compile-time value", void 0)
                      )
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                    lineNumber: 92,
                    columnNumber: 9,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 91,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30 sm:via-black/60",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 107,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent md:hidden",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 108,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "absolute bottom-8 right-8 flex gap-3 z-20",
                children: videos.map((_, index) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "button",
                    {
                      onClick: () => scrollTo(index),
                      className: `h-1.5 rounded-full transition-all duration-500 shadow-sm ${
                        index === selectedIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/30 hover:bg-white/50"
                      }`,
                    },
                    index,
                    false,
                    {
                      fileName:
                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                      lineNumber: 112,
                      columnNumber: 11,
                    },
                    ("TURBOPACK compile-time value", void 0)
                  )
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 110,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
          lineNumber: 90,
          columnNumber: 5,
        },
        ("TURBOPACK compile-time value", void 0)
      );
    };
    function Hero() {
      const [searchQuery, setSearchQuery] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      // Ref for the drag boundary (the entire hero section)
      const constraintsRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search:", searchQuery);
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          ref: constraintsRef,
          className:
            "jsx-f13408a3e64696cc" +
            " " +
            "relative z-0 min-h-screen flex items-center overflow-hidden font-sans text-white",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              VideoCarousel,
              {},
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 144,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                id: "f13408a3e64696cc",
                children:
                  "@keyframes vertical-scroll{0%{transform:translateY(0)}to{transform:translateY(-50%)}}.animate-vertical-scroll.jsx-f13408a3e64696cc{animation:15s linear infinite vertical-scroll}.animate-vertical-scroll.jsx-f13408a3e64696cc:hover{animation-play-state:paused}",
              },
              void 0,
              false,
              void 0,
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "jsx-f13408a3e64696cc" +
                  " " +
                  "relative max-w-7xl mx-auto px-6 py-24 w-full z-10 pointer-events-none",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "jsx-f13408a3e64696cc" +
                      " " +
                      "grid md:grid-cols-2 gap-16 items-center",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "jsx-f13408a3e64696cc" +
                            " " +
                            "pointer-events-auto space-y-10 text-center md:text-left animate-in fade-in duration-1000 slide-in-from-left-5",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "jsx-f13408a3e64696cc" + " " + "space-y-6",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-sm",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "text-xs font-bold text-blue-300 uppercase tracking-wider",
                                          children: "Admissions Open 2025",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 170,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 169,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "h1",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance",
                                      children: [
                                        "Your Future ",
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "br",
                                          {
                                            className: "jsx-f13408a3e64696cc",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300",
                                            children: "Starts Here.",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 174,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-balance font-medium",
                                      children:
                                        "Join thousands of students exploring world-class programs, discovering opportunities, and building success stories.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 180,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 168,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "form",
                              {
                                onSubmit: handleSearch,
                                className:
                                  "jsx-f13408a3e64696cc" +
                                  " " +
                                  "w-full max-w-md mx-auto md:mx-0 group",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "jsx-f13408a3e64696cc" +
                                      " " +
                                      "relative flex items-center p-1.5 bg-white/10 backdrop-blur-lg rounded-full shadow-2xl border border-white/10 group-focus-within:bg-white/15 group-focus-within:border-white/20 transition-all duration-300",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "pl-4 text-slate-400",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "svg",
                                            {
                                              fill: "none",
                                              viewBox: "0 0 24 24",
                                              stroke: "currentColor",
                                              className:
                                                "jsx-f13408a3e64696cc" +
                                                " " +
                                                "w-5 h-5",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "path",
                                                {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: 2,
                                                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                                  className:
                                                    "jsx-f13408a3e64696cc",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 198,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                              lineNumber: 192,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 191,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "input",
                                        {
                                          type: "text",
                                          placeholder: "Search programs...",
                                          value: searchQuery,
                                          onChange: (e) =>
                                            setSearchQuery(e.target.value),
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "flex-1 w-full bg-transparent text-white placeholder-slate-400 text-base px-3 py-2 outline-none",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 206,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "button",
                                        {
                                          type: "submit",
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "px-6 py-2.5 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg",
                                          children: "Search",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 213,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 186,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "jsx-f13408a3e64696cc" +
                                  " " +
                                  "flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "button",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 hover:-translate-y-0.5 transition-all shadow-lg",
                                      children: "Explore Programs",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 223,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "button",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "px-8 py-4 bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all",
                                      children: "Schedule Tour",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 226,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 222,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "jsx-f13408a3e64696cc" +
                                  " " +
                                  "pt-10 border-t border-white/10 flex flex-wrap gap-8 sm:gap-12 justify-center md:justify-start",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 7,
                                      suffix: "+",
                                      label: "Faculties",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 232,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-px h-12 bg-white/10 hidden sm:block",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 233,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 2,
                                      suffix: "K+",
                                      label: "Students",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 234,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-px h-12 bg-white/10 hidden sm:block",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 235,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    StatItem,
                                    {
                                      end: 50,
                                      suffix: "+",
                                      label: "Partners",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 236,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 231,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                          lineNumber: 167,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "jsx-f13408a3e64696cc" +
                            " " +
                            "hidden md:flex h-full flex-col justify-center items-end gap-8 pointer-events-none",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "motion"
                              ].div,
                              {
                                drag: true,
                                dragConstraints: constraintsRef,
                                dragMomentum: false,
                                whileHover: {
                                  scale: 1.01,
                                },
                                whileDrag: {
                                  scale: 1.05,
                                  cursor: "grabbing",
                                  zIndex: 50,
                                },
                                className:
                                  "pointer-events-auto cursor-grab w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-full bg-black/20 h-4 flex items-center justify-center",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        Icons.Grip,
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 253,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 252,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 256,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "p-5 bg-black/40",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "flex justify-between items-start mb-4",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "flex flex-col",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "text-xs font-bold text-blue-300 uppercase tracking-wider mb-1",
                                                        children:
                                                          "Upcoming Event",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "h3",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "text-xl font-bold text-white",
                                                        children:
                                                          "Innovation Summit",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 259,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "bg-white/10 rounded-lg p-2 text-center min-w-[60px]",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "block text-xs uppercase text-slate-400 font-bold",
                                                        children: "Nov",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "span",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "block text-xl font-bold text-white",
                                                        children: "28",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 267,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "flex items-center gap-2 text-slate-300 text-sm mb-4",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                Icons.Clock,
                                                {},
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 278,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc",
                                                  children:
                                                    "10:00 AM - Main Hall",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 279,
                                                  columnNumber: 19,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "button",
                                          {
                                            onPointerDownCapture: (e) =>
                                              e.stopPropagation(),
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/5 transition-colors",
                                            children: "Reserve Spot",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 257,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 243,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "motion"
                              ].div,
                              {
                                drag: true,
                                dragConstraints: constraintsRef,
                                dragMomentum: false,
                                whileHover: {
                                  scale: 1.01,
                                },
                                whileDrag: {
                                  scale: 1.05,
                                  cursor: "grabbing",
                                  zIndex: 50,
                                },
                                className:
                                  "pointer-events-auto cursor-grab w-72 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "w-full bg-white/5 h-4 flex items-center justify-center border-b border-white/5",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        Icons.Grip,
                                        {},
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 302,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 301,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between",
                                      children: /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "span",
                                        {
                                          className:
                                            "jsx-f13408a3e64696cc" +
                                            " " +
                                            "text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2",
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "span",
                                              {
                                                className:
                                                  "jsx-f13408a3e64696cc" +
                                                  " " +
                                                  "relative flex h-2 w-2",
                                                children: [
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      className:
                                                        "jsx-f13408a3e64696cc" +
                                                        " " +
                                                        "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                      lineNumber: 308,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                  /*#__PURE__*/ (0,
                                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                    "jsxDEV"
                                                  ])(
                                                    "span",
                                                    {
                                                      className:
                                                        "jsx-f13408a3e64696cc" +
                                                        " " +
                                                        "relative inline-flex rounded-full h-2 w-2 bg-red-500",
                                                    },
                                                    void 0,
                                                    false,
                                                    {
                                                      fileName:
                                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                      lineNumber: 309,
                                                      columnNumber: 21,
                                                    },
                                                    this
                                                  ),
                                                ],
                                              },
                                              void 0,
                                              true,
                                              {
                                                fileName:
                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                            "Live Seat Status",
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                          lineNumber: 306,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 305,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "jsx-f13408a3e64696cc" +
                                        " " +
                                        "relative h-48 overflow-hidden group",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 316,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "jsx-f13408a3e64696cc" +
                                              " " +
                                              "animate-vertical-scroll group-hover:pause-animation",
                                            children: [
                                              ...SEAT_DATA,
                                              ...SEAT_DATA,
                                            ].map((item, i) =>
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  className:
                                                    "jsx-f13408a3e64696cc" +
                                                    " " +
                                                    "px-5 py-3 border-b border-white/5 flex justify-between items-center",
                                                  children: [
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "flex flex-col",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "text-sm font-medium text-white truncate w-36",
                                                              children:
                                                                item.course,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                              lineNumber: 327,
                                                              columnNumber: 25,
                                                            },
                                                            this
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "div",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "w-full bg-white/10 h-1 rounded-full mt-1.5",
                                                              children:
                                                                /*#__PURE__*/ (0,
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                                  "jsxDEV"
                                                                ])(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      width: `${
                                                                        (1 -
                                                                          item.seats /
                                                                            item.total) *
                                                                        100
                                                                      }%`,
                                                                    },
                                                                    className:
                                                                      "jsx-f13408a3e64696cc" +
                                                                      " " +
                                                                      `h-full rounded-full ${
                                                                        item.seats <
                                                                        5
                                                                          ? "bg-red-500"
                                                                          : "bg-emerald-500"
                                                                      }`,
                                                                  },
                                                                  void 0,
                                                                  false,
                                                                  {
                                                                    fileName:
                                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 27,
                                                                  },
                                                                  this
                                                                ),
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                              lineNumber: 330,
                                                              columnNumber: 25,
                                                            },
                                                            this
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                    /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      "div",
                                                      {
                                                        className:
                                                          "jsx-f13408a3e64696cc" +
                                                          " " +
                                                          "text-right",
                                                        children: [
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                `text-sm font-bold ${
                                                                  item.seats < 5
                                                                    ? "text-red-400"
                                                                    : "text-emerald-400"
                                                                }`,
                                                              children:
                                                                item.seats,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                              lineNumber: 342,
                                                              columnNumber: 25,
                                                            },
                                                            this
                                                          ),
                                                          /*#__PURE__*/ (0,
                                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                            "jsxDEV"
                                                          ])(
                                                            "span",
                                                            {
                                                              className:
                                                                "jsx-f13408a3e64696cc" +
                                                                " " +
                                                                "block text-[10px] text-slate-500 uppercase",
                                                              children: "left",
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                              fileName:
                                                                "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                              lineNumber: 349,
                                                              columnNumber: 25,
                                                            },
                                                            this
                                                          ),
                                                        ],
                                                      },
                                                      void 0,
                                                      true,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 23,
                                                      },
                                                      this
                                                    ),
                                                  ],
                                                },
                                                i,
                                                true,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                                  lineNumber: 322,
                                                  columnNumber: 21,
                                                },
                                                this
                                              )
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                      lineNumber: 315,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                                lineNumber: 292,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                          lineNumber: 241,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                    lineNumber: 165,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 164,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
          lineNumber: 140,
          columnNumber: 5,
        },
        this
      );
    }
    const StatItem = ({ end, suffix, label }) =>
      /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "flex flex-col items-start",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "text-4xl font-bold text-white tracking-tighter",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$react$2d$countup$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {
                    end: end,
                    duration: 2.5,
                    suffix: suffix,
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                    lineNumber: 376,
                    columnNumber: 7,
                  },
                  ("TURBOPACK compile-time value", void 0)
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 375,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className:
                  "text-xs text-slate-400 font-bold uppercase tracking-widest mt-1",
                children: label,
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
                lineNumber: 378,
                columnNumber: 5,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/hero.tsx",
          lineNumber: 374,
          columnNumber: 3,
        },
        ("TURBOPACK compile-time value", void 0)
      );
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Carousel",
      () => Carousel,
      "CarouselContent",
      () => CarouselContent,
      "CarouselItem",
      () => CarouselItem,
      "CarouselNext",
      () => CarouselNext,
      "CarouselPrevious",
      () => CarouselPrevious,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/lib/utils.ts [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/components/ui/button.tsx [app-ssr] (ecmascript)"
      );
    ("use client");
    const CarouselContext =
      /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "createContext"
      ](null);
    function useCarousel() {
      const context =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useContext"
        ](CarouselContext);
      if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
      }
      return context;
    }
    function Carousel({
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    }) {
      const [carouselRef, api] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "default"
      ])(
        {
          ...opts,
          axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins
      );
      const [canScrollPrev, setCanScrollPrev] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ](false);
      const [canScrollNext, setCanScrollNext] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ](false);
      const onSelect =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useCallback"
        ]((api) => {
          if (!api) return;
          setCanScrollPrev(api.canScrollPrev());
          setCanScrollNext(api.canScrollNext());
        }, []);
      const scrollPrev =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](() => {
          api?.scrollPrev();
        }, [api]);
      const scrollNext =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](() => {
          api?.scrollNext();
        }, [api]);
      const handleKeyDown =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useCallback"
        ](
          (event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              scrollPrev();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              scrollNext();
            }
          },
          [scrollPrev, scrollNext]
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](() => {
        if (!api || !setApi) return;
        setApi(api);
      }, [api, setApi]);
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](() => {
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
          api?.off("select", onSelect);
        };
      }, [api, onSelect]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        CarouselContext.Provider,
        {
          value: {
            carouselRef,
            api: api,
            opts,
            orientation:
              orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
          },
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              onKeyDownCapture: handleKeyDown,
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "cn"
              ])("relative", className),
              role: "region",
              "aria-roledescription": "carousel",
              "data-slot": "carousel",
              ...props,
              children: children,
            },
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
              lineNumber: 121,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
          lineNumber: 108,
          columnNumber: 5,
        },
        this
      );
    }
    function CarouselContent({ className, ...props }) {
      const { carouselRef, orientation } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          ref: carouselRef,
          className: "overflow-hidden",
          "data-slot": "carousel-content",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "flex",
                orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                className
              ),
              ...props,
            },
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
              lineNumber: 144,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
          lineNumber: 139,
          columnNumber: 5,
        },
        this
      );
    }
    function CarouselItem({ className, ...props }) {
      const { orientation } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          role: "group",
          "aria-roledescription": "slide",
          "data-slot": "carousel-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "min-w-0 shrink-0 grow-0 basis-full",
            orientation === "horizontal" ? "pl-4" : "pt-4",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
          lineNumber: 160,
          columnNumber: 5,
        },
        this
      );
    }
    function CarouselPrevious({
      className,
      variant = "outline",
      size = "icon",
      ...props
    }) {
      const { orientation, scrollPrev, canScrollPrev } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Button"
        ],
        {
          "data-slot": "carousel-previous",
          variant: variant,
          size: size,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute size-8 rounded-full",
            orientation === "horizontal"
              ? "top-1/2 -left-12 -translate-y-1/2"
              : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            className
          ),
          disabled: !canScrollPrev,
          onClick: scrollPrev,
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__[
                "ArrowLeft"
              ],
              {},
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
                lineNumber: 198,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "sr-only",
                children: "Previous slide",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
                lineNumber: 199,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
          lineNumber: 183,
          columnNumber: 5,
        },
        this
      );
    }
    function CarouselNext({
      className,
      variant = "outline",
      size = "icon",
      ...props
    }) {
      const { orientation, scrollNext, canScrollNext } = useCarousel();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Button"
        ],
        {
          "data-slot": "carousel-next",
          variant: variant,
          size: size,
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "absolute size-8 rounded-full",
            orientation === "horizontal"
              ? "top-1/2 -right-12 -translate-y-1/2"
              : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            className
          ),
          disabled: !canScrollNext,
          onClick: scrollNext,
          ...props,
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__[
                "ArrowRight"
              ],
              {},
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
                lineNumber: 228,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "span",
              {
                className: "sr-only",
                children: "Next slide",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
                lineNumber: 229,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx",
          lineNumber: 213,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Programs]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)"
      );
    // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-ssr] (ecmascript) <export default as ArrowUpRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/components/ui/carousel.tsx [app-ssr] (ecmascript)"
      );
    ("use client");
    const programs = [
      {
        id: 1,
        title: "BABM",
        fullTitle: "Business Administration",
        category: "Undergraduate",
        duration: "4 Years",
        credits: "120 Credits",
        description:
          "Master the fundamentals of business operations, leadership, and strategic management in a global context.",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        href: "/programs/business",
      },
      {
        id: 2,
        title: "BHM",
        fullTitle: "Hotel Management",
        category: "Hospitality",
        duration: "4 Years",
        credits: "126 Credits",
        description:
          "Learn world-class hospitality standards, culinary arts, and hotel operations with hands-on training.",
        image:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
        href: "/programs/hospitality",
      },
      {
        id: 3,
        title: "MBA",
        fullTitle: "Master of Business",
        category: "Post-Graduate",
        duration: "2 Years",
        credits: "60 Credits",
        description:
          "Accelerate your career with advanced leadership skills, financial acumen, and networking opportunities.",
        image:
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
        href: "/programs/mba",
      },
      {
        id: 4,
        title: "BCA",
        fullTitle: "Computer Applications",
        category: "Technology",
        duration: "4 Years",
        credits: "130 Credits",
        description:
          "Dive into software development, cloud computing, and AI with a curriculum built for the tech industry.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        href: "/programs/technology",
      },
      {
        id: 5,
        title: "BMM",
        fullTitle: "Mass Media",
        category: "Media Studies",
        duration: "4 Years",
        credits: "120 Credits",
        description:
          "Explore journalism, advertising, and digital media production in our state-of-the-art studios.",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
        href: "/programs/media",
      },
      {
        id: 6,
        title: "BTTM",
        fullTitle: "Travel & Tourism",
        category: "Tourism",
        duration: "4 Years",
        credits: "124 Credits",
        description:
          "Prepare for a dynamic career in global tourism, sustainable travel, and destination management.",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        href: "/programs/tourism",
      },
    ];
    function Programs() {
      const [api, setApi] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ]();
      const [current, setCurrent] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      const [count, setCount] =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useState"
        ](0);
      const plugin =
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "useRef"
        ](
          (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "default"
          ])({
            delay: 5000,
            stopOnInteraction: true,
          })
        );
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ](() => {
        if (!api) return;
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
      }, [api]);
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-24 bg-[#FAFAFA] w-full",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "container mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h2",
                              {
                                className:
                                  "text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3",
                                children: "Our Academic Programs",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                lineNumber: 128,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className: "text-slate-500 text-lg max-w-xl",
                                children:
                                  "Comprehensive curriculums designed to build your future.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                lineNumber: 131,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                          lineNumber: 127,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "hidden md:flex gap-2",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                onClick: () => api?.scrollPrev(),
                                className:
                                  "w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__[
                                    "ChevronLeft"
                                  ],
                                  {
                                    className: "w-5 h-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                lineNumber: 138,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                onClick: () => api?.scrollNext(),
                                className:
                                  "w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__[
                                    "ChevronRight"
                                  ],
                                  {
                                    className: "w-5 h-5",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                lineNumber: 144,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                          lineNumber: 137,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                    lineNumber: 126,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "Carousel"
                  ],
                  {
                    setApi: setApi,
                    // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations
                    plugins: [plugin.current],
                    opts: {
                      align: "start",
                      loop: true,
                    },
                    className: "w-full",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "CarouselContent"
                      ],
                      {
                        className: "-ml-5 pb-6",
                        children: programs.map((program) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "CarouselItem"
                            ],
                            {
                              className: "pl-5 md:basis-1/2 lg:basis-1/3",
                              children: /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "default"
                                ],
                                {
                                  href: program.href,
                                  className:
                                    "group flex flex-col h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className:
                                          "relative h-56 w-full overflow-hidden bg-slate-100 shrink-0",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "img",
                                            {
                                              src: program.image,
                                              alt: program.title,
                                              className:
                                                "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                              lineNumber: 173,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "absolute top-4 left-4",
                                              children: /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "span",
                                                {
                                                  className:
                                                    "px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-sm border border-white/50",
                                                  children: program.category,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                  lineNumber: 179,
                                                  columnNumber: 23,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                              lineNumber: 178,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                        lineNumber: 172,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "div",
                                      {
                                        className: "flex flex-col flex-1 p-6",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "flex justify-between items-start gap-4 mb-3",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "h3",
                                                        {
                                                          className:
                                                            "text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors",
                                                          children:
                                                            program.title,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 190,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "p",
                                                        {
                                                          className:
                                                            "text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1",
                                                          children:
                                                            program.fullTitle,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 193,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0",
                                                    children: /*#__PURE__*/ (0,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                      "jsxDEV"
                                                    ])(
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__[
                                                        "ArrowUpRight"
                                                      ],
                                                      {
                                                        className: "w-4 h-4",
                                                      },
                                                      void 0,
                                                      false,
                                                      {
                                                        fileName:
                                                          "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 25,
                                                      },
                                                      this
                                                    ),
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                              lineNumber: 188,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "p",
                                            {
                                              className:
                                                "text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3",
                                              children: program.description,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                              lineNumber: 203,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                          /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              className:
                                                "mt-auto pt-5 border-t border-slate-100 grid grid-cols-2 gap-4",
                                              children: [
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "p-1.5 rounded-md bg-blue-50 text-blue-600",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__[
                                                                "Clock"
                                                              ],
                                                              {
                                                                className:
                                                                  "w-4 h-4",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 210,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex flex-col",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[10px] font-bold text-slate-400 uppercase",
                                                                children:
                                                                  "Duration",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-sm font-semibold text-slate-700",
                                                                children:
                                                                  program.duration,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 213,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                                /*#__PURE__*/ (0,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                  "jsxDEV"
                                                ])(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex items-center gap-2.5 border-l border-slate-100 pl-4",
                                                    children: [
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "p-1.5 rounded-md bg-purple-50 text-purple-600",
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__[
                                                                "BookOpen"
                                                              ],
                                                              {
                                                                className:
                                                                  "w-4 h-4",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 224,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                      /*#__PURE__*/ (0,
                                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                        "jsxDEV"
                                                      ])(
                                                        "div",
                                                        {
                                                          className:
                                                            "flex flex-col",
                                                          children: [
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-[10px] font-bold text-slate-400 uppercase",
                                                                children:
                                                                  "Credits",
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                            /*#__PURE__*/ (0,
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                              "jsxDEV"
                                                            ])(
                                                              "span",
                                                              {
                                                                className:
                                                                  "text-sm font-semibold text-slate-700",
                                                                children:
                                                                  program.credits,
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 27,
                                                              },
                                                              this
                                                            ),
                                                          ],
                                                        },
                                                        void 0,
                                                        true,
                                                        {
                                                          fileName:
                                                            "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                          lineNumber: 227,
                                                          columnNumber: 25,
                                                        },
                                                        this
                                                      ),
                                                    ],
                                                  },
                                                  void 0,
                                                  true,
                                                  {
                                                    fileName:
                                                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              ],
                                            },
                                            void 0,
                                            true,
                                            {
                                              fileName:
                                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                              lineNumber: 208,
                                              columnNumber: 21,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName:
                                          "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                        lineNumber: 186,
                                        columnNumber: 19,
                                      },
                                      this
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName:
                                    "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                                  lineNumber: 167,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            program.id,
                            false,
                            {
                              fileName:
                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                              lineNumber: 163,
                              columnNumber: 15,
                            },
                            this
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                        lineNumber: 161,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                    lineNumber: 153,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "mt-8 flex justify-center md:hidden",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className: "flex gap-2",
                        children: Array.from({
                          length: count,
                        }).map((_, index) =>
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: `h-1.5 rounded-full transition-all duration-300 ${
                                current === index + 1
                                  ? "w-6 bg-blue-600"
                                  : "w-1.5 bg-slate-300"
                              }`,
                            },
                            index,
                            false,
                            {
                              fileName:
                                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                              lineNumber: 248,
                              columnNumber: 15,
                            },
                            this
                          )
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName:
                          "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                        lineNumber: 246,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
                    lineNumber: 245,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
              lineNumber: 124,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/programs.tsx",
          lineNumber: 123,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Features]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)"
      );
    ("use client");
    // --- Icons (Inline SVGs for professional look) ---
    const Icons = {
      Faculty: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l9-5-9-5-9 5 9 5z",
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                  lineNumber: 16,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                  lineNumber: 21,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "jsxDEV"
              ])(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
                },
                void 0,
                false,
                {
                  fileName:
                    "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                  lineNumber: 26,
                  columnNumber: 7,
                },
                ("TURBOPACK compile-time value", void 0)
              ),
            ],
          },
          void 0,
          true,
          {
            fileName:
              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
            lineNumber: 9,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Facility: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 41,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName:
              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
            lineNumber: 34,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Global: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 56,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName:
              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
            lineNumber: 49,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Career: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 1.5,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 71,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName:
              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
            lineNumber: 64,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
      Check: () =>
        /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "svg",
          {
            className: "w-4 h-4",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 3,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5 13l4 4L19 7",
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 86,
                columnNumber: 7,
              },
              ("TURBOPACK compile-time value", void 0)
            ),
          },
          void 0,
          false,
          {
            fileName:
              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
            lineNumber: 79,
            columnNumber: 5,
          },
          ("TURBOPACK compile-time value", void 0)
        ),
    };
    function Features() {
      const features = [
        {
          title: "World-Class Faculty",
          description:
            "Learn from renowned experts and industry leaders committed to your success.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Faculty,
            {},
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
              lineNumber: 97,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-blue-50 text-blue-600",
        },
        {
          title: "State-of-the-Art Facilities",
          description:
            "Access cutting-edge laboratories, libraries, and research centers.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Facility,
            {},
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
              lineNumber: 104,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-indigo-50 text-indigo-600",
        },
        {
          title: "Global Community",
          description:
            "Study alongside talented students from over 100 countries.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Global,
            {},
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
              lineNumber: 110,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-violet-50 text-violet-600",
        },
        {
          title: "Career Support",
          description:
            "Get guidance from our career services team and industry connections.",
          icon: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            Icons.Career,
            {},
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
              lineNumber: 117,
              columnNumber: 13,
            },
            this
          ),
          color: "bg-emerald-50 text-emerald-600",
        },
      ];
      const containerRef = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRef"
      ])(null);
      const isInView = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useInView"
      ])(containerRef, {
        once: true,
        margin: "-100px",
      });
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          className: "py-32 px-6 bg-slate-50 relative overflow-hidden",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                      lineNumber: 129,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "absolute top-1/2 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-50",
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                      lineNumber: 130,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 128,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                ref: containerRef,
                className: "max-w-7xl mx-auto relative z-10",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className:
                      "grid lg:grid-cols-2 gap-16 xl:gap-24 items-center",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "motion"
                        ].div,
                        {
                          initial: {
                            opacity: 0,
                            y: 20,
                          },
                          animate: isInView
                            ? {
                                opacity: 1,
                                y: 0,
                              }
                            : {},
                          transition: {
                            duration: 0.6,
                          },
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "inline-block px-3 py-1 mb-6 rounded-full bg-white border border-slate-200 shadow-sm",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "span",
                                  {
                                    className:
                                      "text-xs font-bold text-slate-500 uppercase tracking-wider",
                                    children: "Why Choose Us",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 141,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h2",
                              {
                                className:
                                  "text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9]",
                                children: [
                                  "Academic Excellence Redefined ",
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "br",
                                    {},
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 148,
                                      columnNumber: 45,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 147,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className:
                                  "text-lg text-slate-600 max-w-xl mt-4",
                                children:
                                  "We provide an environment that fosters innovation, critical thinking, and global perspectives.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 152,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "grid gap-6",
                                children: features.map((feature, idx) =>
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                      "motion"
                                    ].div,
                                    {
                                      initial: {
                                        opacity: 0,
                                        x: -20,
                                      },
                                      animate: isInView
                                        ? {
                                            opacity: 1,
                                            x: 0,
                                          }
                                        : {},
                                      transition: {
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                      },
                                      whileHover: {
                                        scale: 1.02,
                                        backgroundColor:
                                          "rgba(255, 255, 255, 0.8)",
                                      },
                                      className:
                                        "group flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 cursor-default",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className: `p-3 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`,
                                            children: feature.icon,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "h3",
                                                {
                                                  className:
                                                    "text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors",
                                                  children: feature.title,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                  lineNumber: 176,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "p",
                                                {
                                                  className:
                                                    "text-slate-500 text-sm leading-relaxed",
                                                  children: feature.description,
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                  lineNumber: 179,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            ],
                                          },
                                          void 0,
                                          true,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    idx,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 159,
                                      columnNumber: 17,
                                    },
                                    this
                                  )
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 157,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                          lineNumber: 136,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                          "motion"
                        ].div,
                        {
                          initial: {
                            opacity: 0,
                            scale: 0.95,
                          },
                          animate: isInView
                            ? {
                                opacity: 1,
                                scale: 1,
                              }
                            : {},
                          transition: {
                            duration: 0.8,
                          },
                          className:
                            "relative h-[600px] w-full hidden lg:block",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className:
                                  "absolute inset-0 bg-slate-200 rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "img",
                                    {
                                      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                      alt: "University Campus",
                                      className:
                                        "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 198,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 204,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 196,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "motion"
                              ].div,
                              {
                                initial: {
                                  y: 20,
                                  opacity: 0,
                                },
                                animate: isInView
                                  ? {
                                      y: 0,
                                      opacity: 1,
                                    }
                                  : {},
                                transition: {
                                  delay: 0.6,
                                },
                                className:
                                  "absolute -right-8 top-12 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[200px] border border-slate-100",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "p-1.5 bg-green-100 rounded-full text-green-600",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              Icons.Check,
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "span",
                                          {
                                            className:
                                              "text-xs font-bold text-slate-500 uppercase",
                                            children: "Verified",
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17,
                                          },
                                          this
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 214,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "text-3xl font-bold text-slate-900 mb-1",
                                      children: "98%",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 222,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "p",
                                    {
                                      className:
                                        "text-xs text-slate-500 font-medium",
                                      children:
                                        "Student satisfaction rate based on 2025 survey.",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                      lineNumber: 223,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 208,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                "motion"
                              ].div,
                              {
                                initial: {
                                  y: -20,
                                  opacity: 0,
                                },
                                animate: isInView
                                  ? {
                                      y: 0,
                                      opacity: 1,
                                    }
                                  : {},
                                transition: {
                                  delay: 0.8,
                                },
                                className:
                                  "absolute -left-8 bottom-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50",
                                children: /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "flex items-center gap-4",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "flex -space-x-3",
                                          children: [1, 2, 3, 4].map((i) =>
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className:
                                                  "w-10 h-10 rounded-full border-2 border-white bg-slate-200",
                                              },
                                              i,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21,
                                              },
                                              this
                                            )
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                          lineNumber: 236,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          children: [
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className:
                                                  "text-sm font-bold text-slate-900",
                                                children: "Top 10",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              "div",
                                              {
                                                className:
                                                  "text-xs text-slate-500",
                                                children: "Global Ranking",
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName:
                                            "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                          lineNumber: 244,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                                lineNumber: 229,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                          lineNumber: 189,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                    lineNumber: 134,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
                lineNumber: 133,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/features.tsx",
          lineNumber: 126,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "Accordion",
      () => Accordion,
      "AccordionContent",
      () => AccordionContent,
      "AccordionItem",
      () => AccordionItem,
      "AccordionTrigger",
      () => AccordionTrigger,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/lib/utils.ts [app-ssr] (ecmascript)"
      );
    ("use client");
    function Accordion({ ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Root"
        ],
        {
          "data-slot": "accordion",
          ...props,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
          lineNumber: 12,
          columnNumber: 10,
        },
        this
      );
    }
    function AccordionItem({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Item"
        ],
        {
          "data-slot": "accordion-item",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])("border-b last:border-b-0", className),
          ...props,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
          lineNumber: 20,
          columnNumber: 5,
        },
        this
      );
    }
    function AccordionTrigger({ className, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Header"
        ],
        {
          className: "flex",
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "Trigger"
            ],
            {
              "data-slot": "accordion-trigger",
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "cn"
              ])(
                "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                className
              ),
              ...props,
              children: [
                children,
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__[
                    "ChevronDownIcon"
                  ],
                  {
                    className:
                      "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
                  },
                  void 0,
                  false,
                  {
                    fileName:
                      "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
              lineNumber: 35,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
          lineNumber: 34,
          columnNumber: 5,
        },
        this
      );
    }
    function AccordionContent({ className, children, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Content"
        ],
        {
          "data-slot": "accordion-content",
          className:
            "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
          ...props,
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: (0,
              __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "cn"
              ])("pt-0 pb-4", className),
              children: children,
            },
            void 0,
            false,
            {
              fileName:
                "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
              lineNumber: 61,
              columnNumber: 7,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Downloads/b_g4jMW8LyWHK/components/ui/accordion.tsx",
          lineNumber: 56,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Downloads/b_g4jMW8LyWHK/components/ui/label.tsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["Label", () => Label]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Downloads/b_g4jMW8LyWHK/lib/utils.ts [app-ssr] (ecmascript)"
      );
    ("use client");
    function Label({ className, ...props }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "Root"
        ],
        {
          "data-slot": "label",
          className: (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$b_g4jMW8LyWHK$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "cn"
          ])(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            className
          ),
          ...props,
        },
        void 0,
        false,
        {
          fileName: "[project]/Downloads/b_g4jMW8LyWHK/components/ui/label.tsx",
          lineNumber: 13,
          columnNumber: 5,
        },
        this
      );
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69225a25._.js.map
