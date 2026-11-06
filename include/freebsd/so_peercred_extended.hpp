#pragma once
#include <string_view>

namespace freebsd {
struct SoPeerCredExtendedDef {
    static constexpr int opt_name = 0x102B;
    static constexpr std::string_view name = "SO_PEERCRED_EXTENDED";
    static constexpr std::string_view desc = "Retrieve peer process extended security credentials and group memberships";
};
}
