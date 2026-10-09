export default defineAppConfig({
  ui: {
    colors: {
      neutral: "neutral",
    },
    input: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    select: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    textarea: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    selectMenu: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    inputMenu: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    inputNumber: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    inputTags: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    inputDate: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    inputTime: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    pinInput: {
      defaultVariants: {
        variant: "subtle",
        size: "lg",
      },
    },
    button: {
      defaultVariants: {
        size: "lg",
      },
    },
    badge: {
      defaultVariants: {
        size: "lg",
      },
    },
    inputRating: {
      defaultVariants: {
        size: "lg",
      },
    },
    tabs: {
      defaultVariants: {
        size: "lg",
      },
    },
    checkbox: {
      defaultVariants: {
        size: "lg",
      },
    },
    checkboxGroup: {
      defaultVariants: {
        size: "lg",
      },
    },
    radioGroup: {
      defaultVariants: {
        size: "lg",
      },
    },
    switch: {
      defaultVariants: {
        size: "lg",
      },
    },
    slider: {
      defaultVariants: {
        size: "lg",
      },
    },
    stepper: {
      defaultVariants: {
        size: "lg",
      },
    },
    calendar: {
      defaultVariants: {
        size: "lg",
      },
    },
    colorPicker: {
      defaultVariants: {
        size: "lg",
      },
    },
    fileUpload: {
      defaultVariants: {
        size: "lg",
      },
    },
    formField: {
      defaultVariants: {
        size: "lg",
      },
    },
    fieldGroup: {
      defaultVariants: {
        size: "lg",
      },
    },
    dropdownMenu: {
      defaultVariants: {
        size: "lg",
      },
    },
    contextMenu: {
      defaultVariants: {
        size: "lg",
      },
    },
    commandPalette: {
      defaultVariants: {
        size: "lg",
      },
    },
    listbox: {
      defaultVariants: {
        size: "lg",
      },
    },
    // 3 properties below this comment transform the different layout sections into floating cards
    dashboardSidebar: {
      slots: {
        root: "min-h-0",
      },
      variants: {
        side: {
          left: { root: "border-0" },
          right: { root: "border-0" },
        },
      },
    },
    dashboardPanel: {
      slots: {
        root: "min-h-0 gap-(--app-gap)",
      },
    },
    dashboardNavbar: {
      slots: {
        root: "border-b-0",
      },
    },
  },
});
