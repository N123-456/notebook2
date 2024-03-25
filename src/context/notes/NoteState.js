import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  
  const notesInitial=[
    {
        "_id": "DESKTOP-T43LH1T-1711180348978",
        "hostname": "DESKTOP-T43LH1T",
        "startTime": {
          "$date": "2024-03-23T07:52:28.000Z"
        },
        "startTimeLocal": "Sat Mar 23 12:52:28.978",
        "cmdLine": {
          "config": "C:\\Program Files\\MongoDB\\Server\\7.0\\bin\\mongod.cfg",
          "net": {
            "bindIp": "127.0.0.1",
            "port": 27017
          },
          "service": true,
          "storage": {
            "dbPath": "C:\\Program Files\\MongoDB\\Server\\7.0\\data"
          },
          "systemLog": {
            "destination": "file",
            "logAppend": true,
            "path": "C:\\Program Files\\MongoDB\\Server\\7.0\\log\\mongod.log"
          }
        },
        "pid": {
          "$numberLong": "8896"
        },
        "buildinfo": {
          "version": "7.0.7",
          "gitVersion": "cfb08e1ab7ef741b4abdd0638351b322514c45bd",
          "targetMinOS": "Windows 7/Windows Server 2008 R2",
          "modules": [],
          "allocator": "tcmalloc",
          "javascriptEngine": "mozjs",
          "sysInfo": "deprecated",
          "versionArray": [
            7,
            0,
            7,
            0
          ],
          "openssl": {
            "running": "Windows SChannel"
          },
          "buildEnvironment": {
            "distmod": "windows",
            "distarch": "x86_64",
            "cc": "cl: Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31107 for x64",
            "ccflags": "/nologo /WX /FImongo/platform/basic.h /fp:strict /EHsc /W3 /wd4068 /wd4244 /wd4267 /wd4290 /wd4351 /wd4355 /wd4373 /wd4800 /wd4251 /wd4291 /we4013 /we4099 /we4930 /errorReport:none /MD /O2 /Oy- /bigobj /utf-8 /permissive- /Zc:__cplusplus /Zc:sizedDealloc /volatile:iso /diagnostics:caret /std:c++20 /Gw /Gy /Zc:inline",
            "cxx": "cl: Microsoft (R) C/C++ Optimizing Compiler Version 19.31.31107 for x64",
            "cxxflags": "/TP",
            "linkflags": "/nologo /DEBUG /INCREMENTAL:NO /LARGEADDRESSAWARE /OPT:REF",
            "target_arch": "x86_64",
            "target_os": "windows",
            "cppdefines": "SAFEINT_USE_INTRINSICS 0 PCRE2_STATIC NDEBUG BOOST_ALL_NO_LIB _UNICODE UNICODE _SILENCE_CXX17_ALLOCATOR_VOID_DEPRECATION_WARNING _SILENCE_CXX17_OLD_ALLOCATOR_MEMBERS_DEPRECATION_WARNING _SILENCE_CXX17_CODECVT_HEADER_DEPRECATION_WARNING _SILENCE_ALL_CXX20_DEPRECATION_WARNINGS _CONSOLE _CRT_SECURE_NO_WARNINGS _ENABLE_EXTENDED_ALIGNED_STORAGE _SCL_SECURE_NO_WARNINGS _WIN32_WINNT 0x0A00 BOOST_USE_WINAPI_VERSION 0x0A00 NTDDI_VERSION 0x0A000000 ABSL_FORCE_ALIGNED_ACCESS BOOST_ENABLE_ASSERT_DEBUG_HANDLER BOOST_FILESYSTEM_NO_CXX20_ATOMIC_REF BOOST_LOG_NO_SHORTHAND_NAMES BOOST_LOG_USE_NATIVE_SYSLOG BOOST_LOG_WITHOUT_THREAD_ATTR BOOST_MATH_NO_LONG_DOUBLE_MATH_FUNCTIONS BOOST_SYSTEM_NO_DEPRECATED BOOST_THREAD_USES_DATETIME BOOST_THREAD_VERSION 5"
          },
          "bits": 64,
          "debug": false,
          "maxBsonObjectSize": 16777216,
          "storageEngines": [
            "devnull",
            "wiredTiger"
          ]
        }
      }
  ]
  const [notes,setNotes]=useState(notesInitial)
  return (
    <noteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
