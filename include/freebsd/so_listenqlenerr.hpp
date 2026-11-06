#pragma once
#include <string_view>

namespace freebsd {
struct SoListenQLenErrDef {
    static constexpr int opt_name = 0x1023;
    static constexpr std::string_view name = "SO_LISTENQLENERR";
    static constexpr std::string_view desc = "Query count of connections dropped due to listen backlog overflow";
};
}
