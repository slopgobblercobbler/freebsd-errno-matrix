#pragma once
#include <string_view>

namespace freebsd {
struct SoListenQLimitDef {
    static constexpr int opt_name = 0x1021;
    static constexpr std::string_view name = "SO_LISTENQLIMIT";
    static constexpr std::string_view desc = "Query maximum listen backlog queue limit for socket";
};
}
