#pragma once
#include <string_view>

namespace freebsd {
struct SoPeerCredAuditDef {
    static constexpr int opt_name = 0x1029;
    static constexpr std::string_view name = "SO_PEERCRED";
    static constexpr std::string_view desc = "Query credentials of peer connected to UNIX domain stream socket";
};
}
