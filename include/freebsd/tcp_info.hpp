#pragma once
#include <string_view>

namespace freebsd {
struct TcpInfoDef {
    static constexpr int opt_name = 32;
    static constexpr std::string_view name = "TCP_INFO";
    static constexpr std::string_view desc = "Query TCP connection metrics and statistics";
};
}
