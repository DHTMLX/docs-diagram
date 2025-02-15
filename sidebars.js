module.exports = {
  docs: [  
    {
      type: "doc",
      id: "overview"
    },
    {
      type: "doc",
      id: "editor_overview"
    },
    // News
    {
      type: "category",
      label: "What's new and migration",
      link: {
        type: 'generated-index',
        title: "What's new and migration",
        //description: '',
        //slug: '/category/docusaurus-guides',
        keywords: ['news'],
        image: '/img/docusaurus.png',
      },
      items: [
        "whats_new",
        "migration",
      ],
    },
    // API
    {
      type: "category",
      label: "API",
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: "API",
        //description: '',
        //slug: '/category/docusaurus-guides',
        keywords: ['api'],
        image: '/img/docusaurus.png',
      },
      items: [
        // Diagram API
        {
          type: "category",
          label: "Diagram API",
          collapsed: true,
          link: {
            type: 'doc',
            id: "api/diagram/api_overview",
          },
          items: [
            {
              type: "category",
              label: "Diagram methods",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/overview/diagram_methods_overview",
              },
              items: [
                "api/diagram/addshape_method",
                "api/diagram/autoplace_method",
                "api/diagram/collapseitem_method",
                "api/diagram/destructor_method",
                "api/diagram/expanditem_method",
                "api/diagram/getscrollstate_method",
                "api/diagram/locate_method",
                "api/diagram/paint_method",
                "api/diagram/scrollto_method",
                "api/diagram/showitem_method",
              ],
            },
            {
              type: "category",
              label: "Diagram events",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/overview/diagram_events_overview",
              },
              items: [
                "api/diagram/aftercollapse_event",
                "api/diagram/afterexpand_event",
                "api/diagram/aftersubmenuopen_event",
                "api/diagram/beforecollapse_event",
                "api/diagram/beforeexpand_event",
                "api/diagram/beforesubmenuopen_event",
                "api/diagram/emptyareaclick_event",
                "api/diagram/emptyareadblclick_event",
                "api/diagram/emptyareamousedown_event",          
                "api/diagram/groupclick_event",
                "api/diagram/groupdblclick_event",
                "api/diagram/groupheaderclick_event",
                "api/diagram/groupheaderdblclick_event",
                "api/diagram/groupmousedown_event",
                "api/diagram/itemclick_event",
                "api/diagram/itemdblclick_event",
                "api/diagram/itemmousedown_event",
                "api/diagram/itemmouseout_event",
                "api/diagram/itemmouseover_event",
                "api/diagram/lineclick_event",
                "api/diagram/linedblclick_event",
                "api/diagram/linemousedown_event",
                "api/diagram/linetitleclick_event",
                "api/diagram/linetitledblclick_event",
                "api/diagram/linetitlemousedown_event",
                "api/diagram/scroll_event",
                "api/diagram/shapeclick_event",
                "api/diagram/shapedblclick_event",
                "api/diagram/shapeiconclick_event",
                "api/diagram/shapemousedown_event",
              ]
            },
            {
              type: "category",
              label: "Diagram properties",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/overview/diagram_properties_overview",
              },
              items: [
              	"api/diagram/autoplacement_property",
              	"api/diagram/defaults_property",
              	"api/diagram/defaultshapetype_property",
              	"api/diagram/exportstyles_property",
              	"api/diagram/lineconfig_property",
              	"api/diagram/margin_property",
              	"api/diagram/scale_property",
              	"api/diagram/select_property",
              	"api/diagram/toolbar_property",
              	"api/diagram/type_property",
              	"api/diagram/typeconfig_property",
              ]
            },
          ]
        },
        // Diagram Editor API
        {
          type: "category",
          label: "Diagram Editor API",
          collapsed: true,
          link: {
            type: 'generated-index',
            title: "Diagram Editor API",
          },
          items: [
            // Editor API / Common API (looks better)
            {
              type: "category",
              label: "Editor API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/diagram_editor/editor/api_overview",
              },
              items: [
                // Editor Methods
                {
                  type: "category",
                  label: "Editor methods",
                  collapsed: true,
                  link: {
                     type: 'doc',
                     id: "api/diagram_editor/editor/methods/overview",
                  },
                  items: [
                    "api/diagram_editor/editor/methods/destructor_method",
                    "api/diagram_editor/editor/methods/import_method",
                    "api/diagram_editor/editor/methods/paint_method",
                    "api/diagram_editor/editor/methods/parse_method",
                    "api/diagram_editor/editor/methods/serialize_method",
                    "api/diagram_editor/editor/methods/zoomin_method",
                    "api/diagram_editor/editor/methods/zoomout_method",
                  ],
                },
                // Editor Events
                {
                  type: "category",
                  label: "Editor events",
                  collapsed: true,
                  link: {
                     type: 'doc',
                     id: "api/diagram_editor/editor/events/overview",
                  },
                  items: [
                    "api/diagram_editor/editor/events/aftergroupmove_event",
                    "api/diagram_editor/editor/events/afteritemcatch_event",
                    "api/diagram_editor/editor/events/afteritemmove_event",
                    "api/diagram_editor/editor/events/afterlinetitlemove_event",
                    "api/diagram_editor/editor/events/aftershapeiconclick_event",
                    "api/diagram_editor/editor/events/aftershapemove_event",
                    "api/diagram_editor/editor/events/beforegroupmove_event",
                    "api/diagram_editor/editor/events/beforeitemcatch_event",
                    "api/diagram_editor/editor/events/beforeitemmove_event",
                    "api/diagram_editor/editor/events/beforelinetitlemove_event",
                    "api/diagram_editor/editor/events/beforeshapeiconclick_event",
                    "api/diagram_editor/editor/events/beforeshapemove_event",
                    "api/diagram_editor/editor/events/groupmoveend_event",
                    "api/diagram_editor/editor/events/itemmoveend_event",
                    "api/diagram_editor/editor/events/itemtarget_event",
                    "api/diagram_editor/editor/events/linetitlemoveend_event",
                    "api/diagram_editor/editor/events/shapemoveend_event",
                    "api/diagram_editor/editor/events/shaperesize_event",
                    "api/diagram_editor/editor/events/zoomin_event",
                    "api/diagram_editor/editor/events/zoomout_event",
                  ]
                },
                // Editor Properties
                {
                  type: "category",
                  label: "Editor properties",
                  collapsed: true,
                  link: {
                     type: 'doc',
                     id: "api/diagram_editor/editor/config/overview",
                  },
                  items: [
                    "api/diagram_editor/editor/config/autoplacement_property",
                    "api/diagram_editor/editor/config/connectionpoints_property", // New
                    "api/diagram_editor/editor/config/defaults_property",
                    "api/diagram_editor/editor/config/grid_property",
                    "api/diagram_editor/editor/config/gridstep_property",
                    "api/diagram_editor/editor/config/itemsdraggable_property",
                    "api/diagram_editor/editor/config/lineconfig_property",
                    "api/diagram_editor/editor/config/magnetic_property",
                    "api/diagram_editor/editor/config/resizepoints_property", // New
                    "api/diagram_editor/editor/config/scale_property",
                    "api/diagram_editor/editor/config/shapetoolbar_property",
                    "api/diagram_editor/editor/config/shapetype_property",
                    "api/diagram_editor/editor/config/type_property",
                    "api/diagram_editor/editor/config/view_property", // New
                  ]
                },
              ]
            },
            // History Manager API
            {
              type: "category",
              label: "History manager API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/diagram_editor/historymanager/api_overview",
              },
              items: [
                // History Manager Methods
                {
                  type: "category",
                  label: "History manager methods",
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: "api/diagram_editor/historymanager/methods/overview",
                  },
                  items: [
                    "api/diagram_editor/historymanager/methods/add_method",
                    "api/diagram_editor/historymanager/methods/disable_method",
                    "api/diagram_editor/historymanager/methods/enable_method",
                    "api/diagram_editor/historymanager/methods/isredo_method",
                    "api/diagram_editor/historymanager/methods/isundo_method",
                    "api/diagram_editor/historymanager/methods/redo_method",
                    "api/diagram_editor/historymanager/methods/reset_method",
                    "api/diagram_editor/historymanager/methods/undo_method",
                  ],
                },
                // History Manager Properties
                {
                  type: "category",
                  label: "History manager properties",
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: "api/diagram_editor/historymanager/config/overview",
                  },
                  items: [
                    "api/diagram_editor/historymanager/config/savedelay_property",
                  ]
                },
              ]
            },
            // Copy Manager API
            {
              type: "category",
              label: "Copy manager API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/diagram_editor/copymanager/api_overview",
              },
              items: [
                // Copy Manager Methods
                {
                  type: "category",
                  label: "Copy manager methods",
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: "api/diagram_editor/copymanager/methods/overview",
                  },
                  items: [
                    "api/diagram_editor/copymanager/methods/copy_method",
                    "api/diagram_editor/copymanager/methods/copystyles_method",
                    "api/diagram_editor/copymanager/methods/paste_method",
                    "api/diagram_editor/copymanager/methods/pastestyles_method",
                  ],
                },
              ]
            },
            // View API
            {
              type: "category",
              label: "View API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/diagram_editor/view/api_overview",
              },
              items: [
                // View Methods
                {
                  type: "category",
                  label: "View methods",
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: "api/diagram_editor/view/methods/overview",
                  },
                  items: [
                    "api/diagram_editor/view/methods/hide_method", // New
                    "api/diagram_editor/view/methods/isvisible_method", // New
                    "api/diagram_editor/view/methods/show_method", // New
                  ],
                },
                // View Events
                {
                  type: "category",
                  label: "View events",
                  collapsed: true,
                  link: {
                    type: 'doc',
                    id: "api/diagram_editor/view/events/overview",
                  },
                  items: [
                    "api/diagram_editor/view/events/afterhide_event", // New
                    "api/diagram_editor/view/events/aftershow_event", // New
                    "api/diagram_editor/view/events/beforehide_event", // New
                    "api/diagram_editor/view/events/beforeshow_event", // New
                  ],
                },
              ]
            },
            // Toolbar API
            {
              type: "category",
              label: "Toolbar API",
              collapsed: true,
              link: {
                type: 'doc',
                id:"api/diagram_editor/toolbar/api_overview"
              },
              items: [
                // Toolbar Methods
                {
                  type: "category",
                  label: "Toolbar methods",
                  collapsible: true,
					        collapsed: true,
                  link: {                  
                    type: 'doc',
						        id: "api/diagram_editor/toolbar/methods/overview" // New
                  },
                  items: [
                    "api/diagram_editor/toolbar/methods/parse_method", // New
                    "api/diagram_editor/toolbar/methods/toolbar_methods", // New
                    "api/diagram_editor/toolbar/methods/treecollection_methods", // New
                  ],
                },
                // Toolbar Properties
                {
                  type: "category",
                  label: "Toolbar properties",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Toolbar properties"
                  },
                  items: [
                    "api/diagram_editor/toolbar/config/css_property", // New
                    "api/diagram_editor/toolbar/config/items_property", // New
                    "api/diagram_editor/toolbar/config/navigationtype_property", // New
                  ],
                },
                // Toolbar Events
                {
                  type: "category",
                  label: "Toolbar events",
                  collapsed: true,
                  link: {
                    type: 'doc',
						        id: "api/diagram_editor/toolbar/events/overview" // New
                  },
                  items: [
                    "api/diagram_editor/toolbar/events/toolbar_events", // New
                    "api/diagram_editor/toolbar/events/treecollection_events", // New
                  ],
                },
              ]
            },
            // Editbar API
            {
              type: "category",
              label: "Editbar API",
              collapsed: true,
              link: {
                type: 'doc',
                id:"api/diagram_editor/editbar/api_overview"
              },
              items: [
                // Editbar Properties
                {
                  type: "category",
                  label: "Editbar properties",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Editbar properties"
                  },
                  items: [
                    "api/diagram_editor/editbar/config/show_property",
                    "api/diagram_editor/editbar/config/css_property",
                    "api/diagram_editor/editbar/config/width_property",
                    "api/diagram_editor/editbar/config/controls_property",
                    "api/diagram_editor/editbar/config/properties_property"
                  ],
                },
                {
                  type: "category",
                  label: "Basic controls",
                  link: {
                    type: "doc",
                    id: "api/diagram_editor/editbar/basic_controls_overview"
                  },
                  items:[
                    "api/diagram_editor/editbar/basic_controls/avatar", // New
                    "api/diagram_editor/editbar/basic_controls/button", // New
                    "api/diagram_editor/editbar/basic_controls/checkbox", // New
                    "api/diagram_editor/editbar/basic_controls/checkboxgroup", // New
                    "api/diagram_editor/editbar/basic_controls/colorpicker", // New
                    "api/diagram_editor/editbar/basic_controls/combo", // New
                    "api/diagram_editor/editbar/basic_controls/container", // New
                    "api/diagram_editor/editbar/basic_controls/datepicker", // New
                    "api/diagram_editor/editbar/basic_controls/fieldset", // New
                    "api/diagram_editor/editbar/basic_controls/input", // New
                    "api/diagram_editor/editbar/basic_controls/radiogroup", // New
                    "api/diagram_editor/editbar/basic_controls/select", // New
                    "api/diagram_editor/editbar/basic_controls/slider", // New
                    "api/diagram_editor/editbar/basic_controls/spacer", // New
                    "api/diagram_editor/editbar/basic_controls/textarea", // New
                    "api/diagram_editor/editbar/basic_controls/timepicker", // New
                    "api/diagram_editor/editbar/basic_controls/toggle", // New
                    "api/diagram_editor/editbar/basic_controls/togglegroup" // New
                  ]
                },
                {
                  type: "category",
                  label: "Complex controls",
                  link: {
                    type: "doc",
                    id: "api/diagram_editor/editbar/complex_controls_overview"
                  },
                  items:[
                    "api/diagram_editor/editbar/complex_controls/arrange", // New
                    "api/diagram_editor/editbar/complex_controls/border", // New
                    "api/diagram_editor/editbar/complex_controls/gridstep", // New
                    "api/diagram_editor/editbar/complex_controls/header", // New
                    "api/diagram_editor/editbar/complex_controls/headercommon", // New
                    "api/diagram_editor/editbar/complex_controls/headerposition", // New
                    "api/diagram_editor/editbar/complex_controls/lineshape", // New
                    "api/diagram_editor/editbar/complex_controls/pointerview", // New
                    "api/diagram_editor/editbar/complex_controls/position", // New
                    "api/diagram_editor/editbar/complex_controls/size", // New
                    "api/diagram_editor/editbar/complex_controls/textalign", // New
                    "api/diagram_editor/editbar/complex_controls/textstyle" // New
                  ]
                }
              ]
            },
            // Shapebar API
            {
              type: "category",
              label: "Shapebar API",
              collapsed: true,
              link: {                  
                type: 'doc',
                id: "api/diagram_editor/shapebar/api_overview" 
              },
              items: [
                // Shapebar Properties
                {
                  type: "category",
                  label: "Shapebar properties",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Shapebar properties"
                  },
                  items: [
                    "api/diagram_editor/shapebar/config/css_property",
                    "api/diagram_editor/shapebar/config/preview_property",
                    "api/diagram_editor/shapebar/config/sections_property",
                    "api/diagram_editor/shapebar/config/show_property",
                    "api/diagram_editor/shapebar/config/width_property"
                  ]
                }
              ]
            }
          ]
        },
        // Items API
        {
          type: "category",
          label: "Items API",
          link: {
            type: 'generated-index',
            title: "Items API",
            //description: '',
            //slug: '/category/docusaurus-guides',
            keywords: ['items'],
            image: '/img/docusaurus.png',
          },
          items: [
            "shapes/configuration_properties",
            "lines/configuration_properties",
            "line_titles/configuration_properties",
            "groups/configuration_properties",
            "swimlanes/configuration_properties",
          ],
        },
        // Common API
        {
          type: "category",
          label: "Common API",
          collapsed: true,
          link: {
            type: 'generated-index',
            title: "Common API",
            //description: '',
            //slug: '/category/docusaurus-guides',
            keywords: ['common_api'],
            image: '/img/docusaurus.png',
          },
          items: [
            // Cell manager API
            {
              type: "category",
              label: "CellManager API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/cell_manager/index",
              },
              items: [
                {
                  type: "category",
                  label: "CellManager methods",
                  link: {
                    type: 'doc',
                    id: "api/overview/cellmanager_methods_overview",
                  },
                  items: [
                    "api/cell_manager/add_method",
                    "api/cell_manager/getcellid_method",
                    "api/cell_manager/getcellindex_method",
                    "api/cell_manager/getsubheadercellid_method",
                    "api/cell_manager/getsubheadercellindex_method",
                    "api/cell_manager/getsubheadertype_method",
                    "api/cell_manager/move_method",
                    "api/cell_manager/remove_method",
                    "api/cell_manager/resetswimlane_method",
                    "api/cell_manager/setswimlane_method",
                    "api/cell_manager/validation_method",
                  ],
                },
                {
                  type: "category",
                  label: "CellManager events",
                  link: {
                    type: 'doc',
                    id: "api/overview/cellmanager_events_overview",
                  },
                  items: [
                    "api/cell_manager/aftercellsadd_event",
                    "api/cell_manager/aftercellsmove_event",
                    "api/cell_manager/aftercellsremove_event",
                    "api/cell_manager/aftercellsvalidation_event",
                    "api/cell_manager/beforecellsadd_event",
                    "api/cell_manager/beforecellsmove_event",
                    "api/cell_manager/beforecellsremove_event",
                    "api/cell_manager/beforecellsvalidation_event",
                  ],
                },
              ]
            },
            // Data collection API
            {
              type: "category",
              label: "DataCollection API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/data_collection/index",
              },
              items: [
                {
                  type: "category",
                  label: "DataCollection methods",
                  link: {
                    type: 'doc',
                    id: "api/overview/datacollection_methods_overview",
                  },
                  items: [
                    "api/data_collection/add_method",
                    "api/data_collection/copy_method",
                    "api/data_collection/eachchild_method",
                    "api/data_collection/eachparent_method",
                    "api/data_collection/exists_method",
                    "api/data_collection/filter_method",
                    "api/data_collection/find_method",
                    "api/data_collection/findall_method",
                    "api/data_collection/getfilters_method",
                    "api/data_collection/getid_method",
                    "api/data_collection/getindex_method",
                    "api/data_collection/getitem_method",
                    "api/data_collection/getnearid_method",
                    "api/data_collection/getroot_method",
                    "api/data_collection/getroots_method",
                    "api/data_collection/load_method",
                    "api/data_collection/map_method",
                    "api/data_collection/move_method",
                    "api/data_collection/parse_method",
                    "api/data_collection/remove_method",
                    "api/data_collection/removeall_method",
                    "api/data_collection/resetfilter_method",
                    "api/data_collection/serialize_method",
                    "api/data_collection/update_method",
                  ],
                },
                {
                  type: "category",
                  label: "DataCollection events",
                  link: {
                    type: 'doc',
                    id: "api/overview/datacollection_events_overview",
                  },
                  items: [
                    "api/data_collection/afteradd_event",
                    "api/data_collection/afterremove_event",
                    "api/data_collection/beforeadd_event",
                    "api/data_collection/beforeremove_event",
                    "api/data_collection/change_event",
                    "api/data_collection/filter_event",
                    "api/data_collection/load_event",
                    
                  ],
                },
              ]
            },
            // Export
            {
              type: "category",
              label: "Export methods",
              collapsed: true,
              link: {
                type: 'doc',
                id: "api/export/index",
              },
              items: [
                "api/export/pdf_method",
                "api/export/png_method", 
              ],
            },
            // Inline editor 
            {
              type: "category",
              label: "InlineEditor events",
              collapsed: true,
              link: {
                type: 'doc',
                id: 'api/inline_editor/index',
              },
              items: [
                "api/inline_editor/aftereditorclose_event",
                "api/inline_editor/aftereditorediting_event",
                "api/inline_editor/aftereditoropen_event",
                "api/inline_editor/beforeeditorclose_event",
                "api/inline_editor/beforeeditorediting_event",
                "api/inline_editor/beforeeditoropen_event", 
              ],
            },
            // Selection
            {
              type: "category",
              label: "Selection API",
              collapsed: true,
              link: {
                type: 'doc',
                id: 'api/selection/index',
              },
              items: [
                {
                  type: "category",
                  label: "Selection methods",
                  link: {
                    type: 'doc',
                    id: "api/overview/selection_methods_overview",
                  },
                  items: [
                    "api/selection/add_method",
                    "api/selection/clear_method",
                    "api/selection/getids_method",
                    "api/selection/getitem_method",
                    "api/selection/includes_method",
                    "api/selection/remove_method"
                  ],
                },
                {
                  type: "category",
                  label: "Selection events",
                  link: {
                    type: 'doc',
                    id: "api/overview/selection_events_overview",
                  },
                  items: [
                    "api/selection/afterselect_event",
                    "api/selection/afterunselect_event",
                    "api/selection/beforeselect_event",
                    "api/selection/beforeunselect_event",
                  ],
                },
              ]
            },
          ]
        },
      ]
    },
    // Guides
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      link: {
        type: 'doc',
        id: 'guides/overview',
      },
      items: [
        // Diagram Items
        {
          type: "category",
          label: "Diagram",
          link: {
            type: 'generated-index',
            title: "Diagram",
            //description: '',
            //slug: '/category/docusaurus-guides',
            keywords: ['diagram'],
            image: '/img/docusaurus.png',
          },
          items: [
            "guides/diagram/initialization",
            "guides/diagram/configuration",
            "guides/diagram/scrolling_diagram",
          ],
        },
        {
          type: "category",
          label: "Diagram items",
          link: {
            type: 'doc',
            id: "guides/items_index",
          },
          items: [
            // Shapes
            {
              type: "category",
              label: "Shapes",
              link: {
                type: 'generated-index',
                title: 'Shapes',
                //description: '',
                //slug: '/category/docusaurus-guides',
                keywords: ['shapes'],
                image: '/img/docusaurus.png',
            },
              items: [
                "shapes/default_shapes",
                "shapes/custom_shape",
              ],
            },
            // Lines
            'lines/index',
            // LineTitles
            'line_titles/index',
            // Groups
            "groups/index",
            // Swimlanes
            "swimlanes/index"
          ]
        },
        {
          type: "category",
          label: "Diagram Editor",
          link: {
            type: 'generated-index',
            title: "Diagram editor",
            //description: '',
            //slug: '/category/docusaurus-guides',
            keywords: ['diagram', 'editor'],
            image: '/img/docusaurus.png',
          },
          items: [
            "guides/diagram_editor/initialization",
            "guides/diagram_editor/toolbar",
            "guides/diagram_editor/shapebar",
            "guides/diagram_editor/grid_area",
            "guides/diagram_editor/editbar",
            "guides/diagram_editor/hot_keys" // New
          ]
        },
        "guides/loading_data",
        "guides/manipulating_items",
        "guides/inline_editing",
        "guides/customization",
        "guides/data_export",
        "guides/event_handling",
        "guides/localization",
        {
          type: "category",
          label: "Themes",
          link: {
            type: 'generated-index',
            title: "Themes",
            keywords: ['themes'],
            image: '/img/docusaurus.png',
          },
          items: [
            "guides/themes/themes",
            "guides/themes/base_themes_configuration",
            "guides/themes/custom_theme",
          ],
        },
        {
          type: "category",
          label: "Integrations",
          link: {
            type: 'generated-index',
            title: "Integrations",
            keywords: ['angular', 'react', 'vue'],
            image: '/img/docusaurus.png',
          },
          items: [
            "guides/integrations/angular_integration",
            "guides/integrations/react_integration",
            "guides/integrations/vue_integration",
            "guides/integrations/svelte_integration"
          ],
        },
        "guides/touch_support",
        "guides/using_typescript",    
      ]
    },
  ]
};
