module.exports = {
  docs: [{
    type: "doc",
    id: "overview",
  },
  {
    type: "category",
    label: "What's new and migration",
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
    items: [

      // Diagram API
      {
        type: "category",
        label: "Diagram API",
        collapsed: true,
        items: [
          "api/diagram/api_overview",
          {
            type: "category",
            label: "Diagram methods",
            collapsed: true,
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
            items: [
              "api/diagram/autoplacement_property",
              "api/diagram/defaults_property",
              "api/diagram/defaultshapetype_property",
              "api/diagram/exportstyles_property",
              "api/diagram/gridstep_property",
              "api/diagram/lineconfig_property",
              "api/diagram/linegap_property",
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

      // Editor API
      {
        type: "category",
        label: "Diagram Editor API",
        collapsed: true,
        items: [
          "api/editor/api_overview",
          {
            type: "category",
            label: "Editor methods",
            collapsed: true,
            items: [
              "api/editor/import_method",
              "api/editor/paint_method",
              "api/editor/parse_method",
              "api/editor/serialize_method",
              "api/editor/setviewmode_method",
              "api/editor/zoomin_method",
              "api/editor/zoomout_method",
            ],
          },
          {
            type: "category",
            label: "Editor events",
            collapsed: true,
            items: [
              "api/editor/aftergroupmove_event",
              "api/editor/afteritemcatch_event",
              "api/editor/afteritemmove_event",
              "api/editor/afterlinetitlemove_event",
              "api/editor/aftershapeiconclick_event",
              "api/editor/aftershapemove_event",
              "api/editor/applybutton_event",
              "api/editor/autolayout_event",
              "api/editor/beforegroupmove_event",
              "api/editor/beforeitemcatch_event",
              "api/editor/beforeitemmove_event",
              "api/editor/beforelinetitlemove_event",
              "api/editor/beforeshapeiconclick_event",
              "api/editor/beforeshapemove_event",
              "api/editor/changegridstep_event",
              "api/editor/exportdata_event",
              "api/editor/groupmoveend_event",
              "api/editor/importdata_event",
              "api/editor/itemmoveend_event",
              "api/editor/itemtarget_event",
              "api/editor/linetitlemoveend_event",
              "api/editor/resetbutton_event",
              "api/editor/shapemoveend_event",
              "api/editor/shaperesize_event",
              "api/editor/visibility_event",
              "api/editor/zoomin_event",
              "api/editor/zoomout_event",
            ]
          },
          {
            type: "category",
            label: "Editor properties",
            collapsed: true,
            items: [
              "api/editor/autoplacement_property",
              "api/editor/controls_property",
              "api/editor/defaults_property",
              "api/editor/editmode_property",
              "api/editor/gappreview_property",
              "api/editor/gridstep_property",
              "api/editor/itemsdraggable_property",
              "api/editor/lineconfig_property",
              "api/editor/linegap_property",
              "api/editor/reservedwidth_property",
              "api/editor/scale_property",
              "api/editor/scalepreview_property",
              "api/editor/shapebarwidth_property",
              "api/editor/shapesections_property",
              "api/editor/shapetoolbar_property",
              "api/editor/shapetype_property",
              "api/editor/type_property",
            ]
          },
          {
            type: "category",
            label: "HistoryManager methods",
            collapsed: true,
            items: [
              "api/historymanager/add_method",
              "api/historymanager/disable_method",
              "api/historymanager/enable_method",
              "api/historymanager/isredo_method",
              "api/historymanager/redo_method",
              "api/historymanager/reset_method",
              "api/historymanager/undo_method",
            ]
          },
          {
            type: "category",
            label: "HistoryManager properties",
            collapsed: true,
            items: [
              "api/historymanager/disabled_property",
              "api/historymanager/savedelay_property",
            ]
          }
        ]
      },

      // Items API
      {
        type: "category",
        label: "Items API",
        items: [
          "shapes/configuration_properties",
          "lines/configuration_properties",
          "groups/configuration_properties",
          "swimlanes/configuration_properties",
        ],
      },
    
      // Common API
      {
        type: "category",
        label: "Common API",
        collapsed: true,
        items: [
          // Cell manager API
          {
            type: "category",
            label: "CellManager API",
            collapsed: true,
            items: [
              "api/cell_manager/index",
              {
                type: "category",
                label: "CellManager methods",
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
            items: [
              "api/data_collection/index",
              {
                type: "category",
                label: "DataCollection methods",
                items: [
                  "api/data_collection/add_method",
                  "api/data_collection/copy_method",
                  "api/data_collection/eachchild_method",
                  "api/data_collection/eachparent_method",
                  "api/data_collection/exists_method",
                  "api/data_collection/filter_method",
                  "api/data_collection/find_method",
                  "api/data_collection/findall_method",
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
                  "api/data_collection/serialize_method",
                  "api/data_collection/update_method",
                ],
              },
              {
                type: "category",
                label: "DataCollection events",
                items: [
                  "api/data_collection/afteradd_event",
                  "api/data_collection/beforeadd_event",
                  "api/data_collection/change_event",
                  "api/data_collection/load_event",
                  
                ],
              },
            ]
          },
    
          // Export
          {
            type: "category",
            label: "Export API",
            collapsed: true,
            items: [
              "api/export/index",
              {
                type: "category",
                label: "Export methods",
                items: [
                  "api/export/pdf_method",
                  "api/export/png_method", 
                ],
              },
            ]
          },

          // Inline editor 
          {
            type: "category",
            label: "InlineEditor API",
            collapsed: true,
            items: [
              "api/inline_editor/index",
              {
                type: "category",
                label: "InlineEditor events",
                items: [
                  "api/inline_editor/aftereditorclose_event",
                  "api/inline_editor/aftereditorediting_event",
                  "api/inline_editor/aftereditoropen_event",
                  "api/inline_editor/beforeeditorclose_event",
                  "api/inline_editor/beforeeditorediting_event",
                  "api/inline_editor/beforeeditoropen_event", 
                ],
              },
            ]
          },
    
          // Selection
          {
            type: "category",
            label: "Selection API",
            collapsed: true,
            items: [
              "api/selection/index",
              {
                type: "category",
                label: "Selection methods",
                items: [
                  "api/selection/add_method",
                  "api/selection/getid_method",
                  "api/selection/getitem_method",
                  "api/selection/getsubid_method",
                  "api/selection/remove_method",
                ],
              },
              {
                type: "category",
                label: "Selection events",
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
    items: [
      "guides/overview",
      // Diagram Items
      {
        type: "category",
        label: "Diagram",
        items: [
          "guides/diagram/initialization",
          "guides/diagram/configuration",
          "guides/diagram/scrolling_diagram",
        ],
      },
      {
        type: "category",
        label: "Diagram items",
        items: [
          // Shapes
          {
            type: "category",
            label: "Shapes",
            items: [
              "shapes/default_shapes",
              "shapes/custom_shape",
            ],
          },
          // Lines
          {
            type: "category",
            label: "Lines",
            items: [
              "lines/index",
            ],
          },
          // Groups
          {
            type: "category",
            label: "Groups",
            items: [
              "groups/index",
            ],
          },
          // Swimlanes
          {
            type: "category",
            label: "Swimlanes",
            items: [
              "swimlanes/index",
            ],
          },
        ]
      },
      {
        type: "category",
        label: "Diagram Editor",
        items: [
          "guides/diagram_editor/initialization",
          "guides/diagram_editor/toolbar",
          "guides/diagram_editor/left_panel",
          "guides/diagram_editor/grid_area",
          "guides/diagram_editor/right_panel",
        ],
      },
      "guides/loading_data",
      "guides/manipulating_items",
      "guides/inline_editing",
      "guides/customization",
      "guides/data_export",
      "guides/event_handling",
      "guides/localization",
      "guides/using_typescript",
      "guides/angular_integration",
      "guides/react_integration",
      "guides/vue_integration",
    ]
  },
]};